import {Component} from "react";

/**
 * Ideas for app:
 *  - list of best colour schemes
 *  - list of cool colours that can be combined together
 *  - ?
 */

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
