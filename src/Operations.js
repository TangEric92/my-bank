import React from "react";
import Operation from "./Operation";

class Operations extends React.Component {
  render = () => {
    const operations = this.props.operations;

    return (
      <ul className="operations">
        {operations.map((operation, index) => {
          return (
            <Operation
              key={"operation:" + index}
              index={index}
              operation={operation}
            />
          );
        })}
      </ul>
    );
  };
}

export default Operations;
