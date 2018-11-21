import React, { PureComponent } from "react";
import styles from "./Header.module.css";

export default class Header extends PureComponent {
  render() {
    return (
      <div className={styles.Signup}>
        <header className={styles.header}>
          <span className={styles.logo}>Elansdowne</span>
        </header>
      </div>
    );
  }
}
