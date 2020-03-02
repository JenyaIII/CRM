import React from "react";
import classes from "./Style";

const UserStatus = ({ item }) => {
  const StatusWrapper = status => {
    let style;

    const pattern = style => <span style={style}>{status}</span>;
    switch (status) {
      case "Junior":
        style = classes.junior;
        break;
      case "Middle":
        style = classes.middle;
        break;
      case "Senior":
        style = classes.senior;
        break;
      default:
    }
    return pattern(style);
  };

  return StatusWrapper(item);
};

export default UserStatus;
