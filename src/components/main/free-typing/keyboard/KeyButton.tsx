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
  /*
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        height: "40px",
        width: "40px",
        backgroundColor: "#FFF",
      },
      shift: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        height: "40px",
        width: "80px",
      },
      tab: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        height: "40px",
        width: "60px",
      },
      space: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        height: "40px",
        width: "220px",
      },
      caps: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        height: "40px",
        width: "70px",
      },
      ctrl: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        height: "40px",
        width: "65px",
      },
      enter: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        height: "90px",
        width: "90px",
      },
    })
  );
  const classes = useStyles();
  */

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
