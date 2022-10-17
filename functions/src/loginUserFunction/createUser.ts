import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
/*
type UserTypingTexts = {
    uid: string,
    typingTexts: {
        id: number,
        originalText: string,
        kanaText: string
    }[]
}
*/

export const createUser = functions.https.onCall((data, context) => {
  if (!admin.apps.length) {
    admin.initializeApp();
  }

  return {data: data, auth: context.auth};
});
