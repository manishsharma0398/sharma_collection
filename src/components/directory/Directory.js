import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory-selector";
import MenuItem from "../menu-item/MenuItem";

import "./Directory.scss";

const Directory = ({ directorySections }) => {
  return (
    <div className="directory-menu">
      {directorySections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  directorySections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
