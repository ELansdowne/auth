import React, { PureComponent } from "react";
import Header from "../../shared/Header/Header";
import HorizontalNonLinearStepper from "../../shared/Stepper/Stepper";
import styles from "./Signup.module.css";
export class Signup extends PureComponent {
  render() {
    return (
      <div className={styles.Signup}>
        <Header />
        <HorizontalNonLinearStepper />
      </div>
    );
  }
}

export default Signup;
