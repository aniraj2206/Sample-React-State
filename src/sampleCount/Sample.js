import React, { Component } from "react";
import { connect } from "react-redux";

class Sample extends Component {
  render() {
    return (
      <>
        <div> Display Counter: {this.props.count}</div>
        <br />
        <button onClick={this.props.onIncCounter}> - INC - </button>
        <br />
        <br />
        <button onClick={this.props.onDecCounter}> - DEC - </button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.counter
  };
};

const mapDispatchToProp = dispatch => {
  return {
    onIncCounter: () => dispatch({ type: "INCREMENT" }),
    onDecCounter: () => dispatch({ type: "DECREMENT" })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProp
)(Sample);
