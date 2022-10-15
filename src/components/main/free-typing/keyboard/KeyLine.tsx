import React from "react";
import KeyButton from "./KeyButton";

type KeyLineValues = { keyCode: string; keyValue: string }[];

const fastLineValue: KeyLineValues = [
  { keyCode: "", keyValue: "" },
  { keyCode: "49", keyValue: "1" },
  { keyCode: "50", keyValue: "2" },
  { keyCode: "51", keyValue: "3" },
  { keyCode: "52", keyValue: "4" },
  { keyCode: "53", keyValue: "5" },
  { keyCode: "54", keyValue: "6" },
  { keyCode: "55", keyValue: "7" },
  { keyCode: "56", keyValue: "8" },
  { keyCode: "57", keyValue: "9" },
  { keyCode: "48", keyValue: "0" },
  { keyCode: "189", keyValue: "-" },
  { keyCode: "222", keyValue: "^" },
  { keyCode: "220", keyValue: "\\" },
  { keyCode: "8", keyValue: "auto" },
];
const secondLineValue: KeyLineValues = [
  { keyCode: "8", keyValue: "Tab" },
  { keyCode: "81", keyValue: "Q" },
  { keyCode: "87", keyValue: "W" },
  { keyCode: "69", keyValue: "E" },
  { keyCode: "82", keyValue: "R" },
  { keyCode: "84", keyValue: "T" },
  { keyCode: "89", keyValue: "Y" },
  { keyCode: "85", keyValue: "U" },
  { keyCode: "73", keyValue: "I" },
  { keyCode: "79", keyValue: "O" },
  { keyCode: "80", keyValue: "P" },
  { keyCode: "192", keyValue: "@" },
  { keyCode: "219", keyValue: "[" },
];
const thirdLineValue: KeyLineValues = [
  { keyCode: "20", keyValue: "caps" },
  { keyCode: "65", keyValue: "A" },
  { keyCode: "83", keyValue: "S" },
  { keyCode: "68", keyValue: "D" },
  { keyCode: "70", keyValue: "F" },
  { keyCode: "71", keyValue: "G" },
  { keyCode: "72", keyValue: "H" },
  { keyCode: "74", keyValue: "J" },
  { keyCode: "75", keyValue: "K" },
  { keyCode: "76", keyValue: "L" },
  { keyCode: "187", keyValue: ";" },
  { keyCode: "186", keyValue: ":" },
  { keyCode: "221", keyValue: "]" },
];
const forthLineValue: KeyLineValues = [
  { keyCode: "16", keyValue: "shift" },
  { keyCode: "90", keyValue: "Z" },
  { keyCode: "88", keyValue: "X" },
  { keyCode: "67", keyValue: "C" },
  { keyCode: "86", keyValue: "V" },
  { keyCode: "66", keyValue: "B" },
  { keyCode: "78", keyValue: "N" },
  { keyCode: "77", keyValue: "M" },
  { keyCode: "188", keyValue: "," },
  { keyCode: "190", keyValue: "." },
  { keyCode: "191", keyValue: "/" },
  { keyCode: "226", keyValue: "\\" },
  { keyCode: "", keyValue: "" },
  { keyCode: "16", keyValue: "auto" },
];
const fefthLineValue: KeyLineValues = [
  { keyCode: "17", keyValue: "ctrl" },
  { keyCode: "", keyValue: "" },
  { keyCode: "", keyValue: "" },
  { keyCode: "", keyValue: "" },
  { keyCode: "32", keyValue: "space" },
  { keyCode: "", keyValue: "" },
  { keyCode: "", keyValue: "" },
  { keyCode: "", keyValue: "" },
  { keyCode: "", keyValue: "" },
  { keyCode: "", keyValue: "" },
  { keyCode: "17", keyValue: "auto" },
];

const KeyLine: React.FC = () => (
  <>
    <div className="key_line">
      {fastLineValue.map((value, index) => (
        <KeyButton keyObject={value} />
      ))}
    </div>
    <div className="key_line">
      <div className="enter_lines">
        <div className="key_line">
          {secondLineValue.map((value, index) => (
            <KeyButton keyObject={value} />
          ))}
        </div>
        <div className="key_line">
          {thirdLineValue.map((value, index) => (
            <KeyButton keyObject={value} />
          ))}
        </div>
      </div>
      <KeyButton keyObject={{ keyCode: "13", keyValue: "Enter" }} />
    </div>
    <div className="key_line">
      {forthLineValue.map((value, index) => (
        <KeyButton keyObject={value} />
      ))}
    </div>
    <div className="key_line">
      {fefthLineValue.map((value, index) => (
        <KeyButton keyObject={value} />
      ))}
    </div>
  </>
);

export default KeyLine;
