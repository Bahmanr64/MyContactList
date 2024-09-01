import styles from "./Header.module.css";

function Headder() {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p>
        <a href="www.google.com">My Contact App</a> | React.js ContactApp
      </p>
    </div>
  );
}

export default Headder;
