import React from "react";
import { Card } from "@mui/material";

import MainText from "./MainText";
import KanaText from "./KanaText";
import RomeText from "./RomeText";
import "./TextView.scss";

type Props = {
  originalText: string;
  kanaText: string;
  typedText: string;
  remainingText: string;
};

const TextView: React.FC<Props> = ({
  originalText,
  kanaText,
  typedText,
  remainingText,
}) => (
  <Card
    sx={{ width: "100%", minWidth: 275, height: 150, marginTop: 10 }}
    className="text_view"
    variant="outlined"
  >
    <MainText mainText={originalText} />
    <KanaText kanaText={kanaText} />
    <RomeText typedText={typedText} remainingText={remainingText} />
  </Card>
);
export default TextView;
