export type TypingObject = {
  id: number;
  originalText: string;
  kanaText: string;
};

export type Challenge = {
  typedRoman: string;
  remainingRoman: string;
};
