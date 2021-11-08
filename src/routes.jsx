import React from "react";
import "./App.scss";
import Routes from "./Routes";

const App = () => {
  return (
    <div className="app">
      <div className="Nav">
        <Routes />
      </div>
    </div>
  );
};

export default App;

// import React from "react";
// import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";
// import ValuedSecurites from "./Pages/ValuedSecurities";
// import { Security } from "@okta/okta-react";

// //import { LoginCallback, SecureRoute, Security } from "@okta/okta-react";
// // import Home from './Compositions/Login/Home'
// // import LogOut from './Compositions/LogOut'
// //import _404 from "./Compositions/_404";

// const Routes = () => {
//   const oktaDomain = "login-test.theocc.com";
//   // process.env.NODE_ENV === 'production' ? 'login.theocc.com' : 'login-test.theocc.com'
//   const clientId = "0oa12j5bccnvQEmJ30h8";
//   return (
//     <>
//       <Security
//         issuer={`https://${oktaDomain}/oauth2/aussvnpynzFVyjibP0h7`}
//         clientId={clientId}
//         redirectUri="https://www.theocc.com"
//         pkce={true}
//         disableHttpsCheck={true}
//         scopes={[
//           "ui.mde.read.write",
//           "openid",
//           "profile",
//           "email",
//           "address",
//           "phone",
//         ]}
//       >
//         <Router>
//           <div>
//             <ul>
//               <li>
//                 <Link to="/">Valued Securities</Link>
//               </li>
//             </ul>
//           </div>

//           <Switch>
//             <Route path="/" component={ValuedSecurites} />
//           </Switch>
//         </Router>
//       </Security>
//     </>
//   );
// };
// export default Routes;

import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
//import ValuedSecurites from "./Pages/ValuedSecurities";
import { LoginCallback, SecureRoute, Security } from "@okta/okta-react";
import Home from "./Compositions/Login/Home";
import LogOut from "./Compositions/LogOut";
import _404 from "./Compositions/_404";

const Routes = () => {
  const oktaDomain = "login-test.theocc.com";
  const { path } = useRouteMatch();
  // process.env.NODE_ENV === 'production' ? 'login.theocc.com' : 'login-test.theocc.com'
  const clientId = "0oa12q5oovy0mVmyK0h8"; // This is for MDE
  //const clientId = '0oat0spq74sA70HIq0h7' // This is of risk-ui... IPL
  return (
    <>
      <Security
        issuer={`https://${oktaDomain}/oauth2/aussvnpynzFVyjibP0h7`}
        clientId={clientId}
        //redirectUri="https://app.rfw-dev-10.rns-risk.reg-dev.theocc.com/risk-management/implicit/callback"
        //redirectUri={`${window.location.origin}/risk-management/implicit/callback`}
        redirectUri={`${window.location.origin}/market-data-editing/implicit/callback`}
        pkce={true}
        disableHttpsCheck={true}
        scopes={[
          "ui.mde.read.write",
          "openid",
          "profile",
          "email",
          "address",
          "phone",
        ]}
      >
        <Switch>
          <Route
            exact
            path={`${path}implicit/callback`}
            component={LoginCallback}
          />
          <Route exact path={`${path}logout`} component={LogOut} />
          <SecureRoute path={`${path}`} component={Home} />
          <Route path="*" component={_404} />
        </Switch>
      </Security>
    </>
  );
};
export default Routes;
