import React from "react";

type Props = {
  typedText: string;
  remainingText: string;
};

const RomeText: React.FC<Props> = ({ typedText, remainingText }) => (
  <div className="rome_text">
    <div className="typed_text">{typedText}</div>
    <div className="remaining_text">{remainingText.replace(typedText, "")}</div>
  </div>
);

export default RomeText;
