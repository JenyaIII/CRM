import React from "react";
import classes from "./Style";

const ProjectStatus = ({ item }) => {
  const StatusWrapper = status => {
    let style;

    const pattern = style => <span style={style}>{status}</span>;
    switch (status) {
      case "In work":
        style = classes.inWork;
        break;
      case "In discussion":
        style = classes.inDiscussion;
        break;
      case "Completed":
        style = classes.completed;
        break;
      case "Draft":
        style = classes.draft;
        break;
      default:
        style = classes.inDiscussion;
    }
    return pattern(style);
  };

  return StatusWrapper(item);
};

export default ProjectStatus;
