import firebase from "firebase/app";
import "firebase/messaging";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUwGpAl4LdPIBGkxlEpHIwWffwKN4Ho2A",
  authDomain: "test-c4eb0.firebaseapp.com",
  projectId: "test-c4eb0",
  storageBucket: "test-c4eb0.appspot.com",
  messagingSenderId: "378531626054",
  appId: "1:378531626054:web:1833062bc6942c33ad5e47",
  measurementId: "G-1W41S5178B",
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
// const { REACT_APP_VAPID_KEY } = process.env
const publicKey =
  "BAWF1z7JJXVcAQMwOcaVodBrjGtfWFm1-ZxVGeAuGnaVG2lBFLg3ltpCcjbagVyVWBypmYGsAp74s1s-Yif24lQ";

export const getToken = async (setTokenFound) => {
  let currentToken = "";
  try {
    currentToken = await messaging.getToken({ vapidKey: publicKey });
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log("An error occurred while retrieving token.", error);
  }
  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
