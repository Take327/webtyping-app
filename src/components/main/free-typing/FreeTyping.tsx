import * as React from "react";
import { Stack } from "@mui/material";
// @ts-ignore
import { Sentence } from "typing-ja";

import Keyboard from "./keyboard/Keyboard";
import TextArea from "./textview/TextView";

import { TypingObject } from "../../../common/types";

const testText: TypingObject[] = [
  {
    id: 1,
    originalText: "犬も歩けば棒に当たる",
    kanaText: "イヌモアルケバボウニナタル",
  },
  {
    id: 2,
    originalText: "石の上にも三年",
    kanaText: "イシノウエニモサンネン",
  },
];

const FreeTyping = () => {
  const [globalCount, setCount] = React.useState(0);
  const [originalText, setOriginalText] =
    React.useState("スペースキーを押してください。");
  const [kanaText, setKanaText] = React.useState("");
  const [typedText, setTypedText] = React.useState("");
  const [remainingText, setRemainingText] = React.useState("");
  const [typingTextArray, setTypingTextArray] =
    React.useState<TypingObject[]>(testText);

  const [challenges, setChallenges] = React.useState<any[]>([]);

  const [initialize, setInitialize] = React.useState<boolean>(false);

  React.useEffect(() => {}, []);

  React.useEffect(() => {
    // キーダウン時のアクション
    document.onkeydown = (event) => {
      if (initialize) {
        console.log(challenges);
        console.log("initialize:" + initialize);
        console.log("keydown");
        const targetId = `${event.keyCode}_button`;
        const target = document.getElementById(targetId);
        if (target) {
          target.style.backgroundColor = "#81d8d0";
        }
        console.log("globalCount", globalCount);
        typingAction(event.key, globalCount);
      } else {
        if (event.key === " ") {
          startText(typingTextArray);
          setInitialize(true);
        }
      }
    };

    // キーアップ時のアクション
    document.onkeyup = (event) => {
      const targetId = `${event.keyCode}_button`;
      const target = document.getElementById(targetId);
      if (target) {
        target.style.backgroundColor = "#FFF";
      }
    };
  });

  const typingAction = (key: string, count: number) => {
    // @ts-ignore
    console.log("ここ１", count);
    if (challenges[count].input(key)) {
      console.log("ここ２");
      setTypedText(challenges[count].typedRoman);
      setRemainingText(challenges[count].remainingRoman);

      // @ts-ignore
      console.log("isclose", count);
      if (challenges[count].isCleared()) {
        if (count + 1 === challenges.length) {
          alert("クリア");
        } else {
          console.log("次のテキストに進む");
          const addCount = count + 1;
          console.log("addCount", addCount);

          nextText(addCount);
          setCount(addCount);
        }
      }
    } else {
      const text_view = document.querySelector<HTMLElement>(".text_view");
      if (text_view) {
        text_view.style.backgroundColor = "rgb(255, 0, 0)";
        setTimeout(() => {
          text_view.style.backgroundColor = "rgb(255, 255, 255)";
        }, 25);
      }
    }
  };

  const startText = (typingObjectArray: TypingObject[]) => {
    if (typingObjectArray.length !== 0) {
      setOriginalText(typingObjectArray[globalCount].originalText);
      setKanaText(typingObjectArray[globalCount].kanaText);
      setTypingTextArray(typingObjectArray);

      const typingInstanceArry = typingObjectArray.map((value) => {
        return new Sentence(value.kanaText);
      });

      const challengeArry = typingInstanceArry.map((sentence) => {
        return sentence.newChallenge();
      });

      setChallenges(challengeArry);
      setTypedText(challengeArry[0].typedRoman);
      setRemainingText(challengeArry[0].remainingRoman);
    }
  };

  const nextText = (count: number) => {
    console.log("nextText");
    setOriginalText(typingTextArray[count].originalText);
    setKanaText(typingTextArray[count].kanaText);
    setTypedText(challenges[count].typedRoman);
    setRemainingText(challenges[count].remainingRoman);
  };

  return (
    <Stack direction="column" spacing={2} alignItems="center">
      <TextArea
        originalText={originalText}
        kanaText={kanaText}
        typedText={typedText}
        remainingText={remainingText}
      />
      <Keyboard />
    </Stack>
  );
};

export default FreeTyping;
