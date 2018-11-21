import React, { PureComponent } from "react";
import styles from "./Dashboard.module.css";
import Header from "../../shared/Header/Header";
import { Link } from "react-router-dom";

export default class Dashboard extends PureComponent {
  render() {
    return (
      <div className={styles.Dashboard}>
        <Header />
        <main className={styles.main}>
          <div className={styles.logo}>See what's next.</div>
          <Link to="/signup">
            <button
              variant="contained"
              color="secondary"
              className={styles.button}
            >
              Join us
            </button>
          </Link>
        </main>
      </div>
    );
  }
}
