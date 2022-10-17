import React from "react";
import { Paper } from "@mui/material";

type Props = {
  keyObject: KeyObject;
};

type KeyObject = {
  keyCode: string;
  keyValue: string;
};

const KeyButton: React.FC<Props> = ({ keyObject }) => {

  const keyHandle = (obj: KeyObject) => {
    const code = obj.keyCode;
    const value = obj.keyValue;
    switch (value) {
      case "shift":
        return <Paper className="key_default shift" />;

      case "Tab":
        return <Paper className="key_default tab" />;

      case "space":
        return <Paper className="key_default space" />;

      case "caps":
        return <Paper className="key_default caps" />;

      case "ctrl":
        return <Paper className="key_default ctrl" />;

      case "Enter":
        return <Paper className="key_default enter" />;

      case "auto":
        return <Paper className="key_default auto" />;

      default:
        return (
          <Paper id={`${code}_button`} className="key_default normal">
            {value}
          </Paper>
        );
    }
  };

  return keyHandle(keyObject);
};

export default KeyButton;
