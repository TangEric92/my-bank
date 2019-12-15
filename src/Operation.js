import React from "react";

class Operation extends React.Component {
  render = () => {
    const operation = this.props.operation;
    const index = this.props.index;

    return (
      <li key={"li:operation:" + index} className="operation">
        <span className="operation-date">{operation.date}</span>
        <span className="operation-description">{operation.description}</span>
        <span className="operation-amount">{operation.amount} €</span>
      </li>
    );
  };
}

export default Operation;
