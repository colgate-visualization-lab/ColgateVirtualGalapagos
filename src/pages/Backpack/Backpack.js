import React, { Component } from "react";
import { Link } from "react-router-dom";

import classes from "./Backpack.css";
import { fieldbook } from "assets/misc";

class Backpack extends Component {
  render() {
    return (
      <div>
        <Link to="/fieldbook">
          <img src={fieldbook} alt="Fieldbook" className={classes.Image} />
        </Link>
        <img src={fieldbook} alt="Fieldbook" className={classes.Image} />
      </div>
    );
  }
}

export default Backpack;
