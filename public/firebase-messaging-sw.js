importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
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
messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/logo192.png",
  };
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
