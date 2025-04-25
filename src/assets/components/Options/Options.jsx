import React from "react";
import s from "./Options.module.css";

const Options = ({ onLeaveFeedback, onReset, hasFeedback }) => {
  return (
    <ul>
      <button className={s.buttons} onClick={() => onLeaveFeedback("good")}>
        Good
      </button>
      <button className={s.buttons} onClick={() => onLeaveFeedback("neutral")}>
        Neutral
      </button>
      <button className={s.buttons} onClick={() => onLeaveFeedback("bad")}>
        Bad
      </button>
      {hasFeedback && <button onClick={onReset}>Reset</button>}
    </ul>
  );
};

export default Options;
