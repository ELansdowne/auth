import React, { PureComponent } from "react";
import Header from "../../shared/Header/Header";
import HorizontalNonLinearStepper from "../../shared/Stepper/Stepper";
export class Signup extends PureComponent {
  render() {
    return (
      <div className={StyleSheet.Signup}>
        <Header />
        <HorizontalNonLinearStepper />
      </div>
    );
  }
}

export default Signup;
