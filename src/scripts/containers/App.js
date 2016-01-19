import {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as Actions from "js/actions/actions";

/**
 * How to:
 *
 * - Include images:
 *   <img src={require("../../images/name.svg")} />
 *   <img src={require("../../images/name.png")} />
 */

/**
 * ES7 Decorator
 *
 * Return specific states/values to use in the component.
 */
@connect(() => {
  return {};
})
export default class App extends Component {

  /**
   * On class initialization bind all the actions to the dispatch function.
   *
   * @param {Object} props
   */
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(Actions, this.props.dispatch);
  }

  /**
   * Expected properties object types.
   */
  static propTypes = {}

  /**
   * Expected context object types.
   */
  static childContextTypes = {
    actions: PropTypes.object
  }

  /**
   * Getter for the child context object.
   */
  getChildContext() {
    return {
      actions: this.actions
    };
  }

  /**
   * Render the provided structure.
   */
  render() {
    return (
      <main>
        <h1>Color Schemes</h1>

        <ul>
          <li className="blue"></li>
          <li className="red"></li>
          <li className="green"></li>
          <li className="red"></li>
          <li className="blue"></li>
          <li className="green"></li>
          <li className="red"></li>
          <li className="blue"></li>
          <li className="red"></li>
          <li className="green"></li>
        </ul>
      </main>
    );
  }
}
