import * as React from "react";
import { Stack } from "@mui/material";
// @ts-ignore
import { Sentence } from "typing-ja";

import Keyboard from "./keyboard/Keyboard";
import TextArea from "./textview/TextView";

import { TypingObject } from "../../../common/types";
import useLocationChange from '../../../common/useLocationChange'

import processEnv from "../../../common/processEnv"

const FreeTyping = () => {
  const [globalCount, setCount] = React.useState(0);
  const [originalText, setOriginalText] =
    React.useState("エンターキーを押してください。");
  const [kanaText, setKanaText] = React.useState("");
  const [typedText, setTypedText] = React.useState("");
  const [remainingText, setRemainingText] = React.useState("");
  const [typingTextArray, setTypingTextArray] =
    React.useState<TypingObject[]>([]);

  const [challenges, setChallenges] = React.useState<any[]>([]);

  const [initialize, setInitialize] = React.useState<boolean>(false);

  useLocationChange((location) => {
    console.log(location.pathname)
  })

  React.useEffect(() => {
    console.log(processEnv.apiUrl.defaultTypingText)
    const initAction = async () => {
      try {
        console.log(processEnv.apiUrl.defaultTypingText)
        const request = await fetch(processEnv.apiUrl.defaultTypingText);
        const json: { typingArray: TypingObject[] } =
          (await request.json()) as unknown as {
            typingArray: TypingObject[];
          };
        console.log(json.typingArray);

        setTypingTextArray(json.typingArray);
      } catch {
      } finally {
      }
    };

    initAction();
  }, []);

  React.useEffect(() => {
    // キーダウン時のアクション
    document.onkeydown = (event) => {
      if (initialize) {
        const targetId = `${event.keyCode}_button`;
        const target = document.getElementById(targetId);
        if (target) {
          target.style.backgroundColor = "#81d8d0";
        }
        typingAction(event.key, globalCount);
      } else {
        if (event.key === "Enter") {
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
    if (challenges[count].input(key)) {
      setTypedText(challenges[count].typedRoman);
      setRemainingText(challenges[count].remainingRoman);

      // @ts-ignore
      if (challenges[count].isCleared()) {
        if (count + 1 === challenges.length) {
          //alert("クリア");
          setOriginalText("クリア");
          setKanaText("");
          setTypedText("");
          setRemainingText("");
        } else {
          const addCount = count + 1;

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
