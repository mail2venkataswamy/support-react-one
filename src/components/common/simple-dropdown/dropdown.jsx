import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const SimpleDropdown = (props) => {
  const defaultOption = props.options[0];

  return (
    <Dropdown
      options={props.options}
      onChange={props.onChange}
      value={
        props.selectedValue && props.selectedValue.value
          ? props.selectedValue
          : defaultOption
      }
      placeholder="Select an option"
    />
  );
};

export default SimpleDropdown;
