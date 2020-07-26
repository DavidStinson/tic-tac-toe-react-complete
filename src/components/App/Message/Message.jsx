import React from "react";

const Message = (props) => {
  return (
    <p className="message">
      {props.player === -1 ? props.playerOneName : props.playerTwoName}, it's
      your turn!
    </p>
  );
};

export default Message;
