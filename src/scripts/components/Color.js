import {Component} from "react";

const styles = {
  container: {
    backgroundColor: "blue"
  }
};

export default class Color extends Component {
  render() {
    return (
      <div style={styles.container}></div>
    );
  }
}
