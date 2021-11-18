import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { onMessageListener } from "./firebaseInit";
import Notifications from "./components/notifications/Notifications";
import ReactNotificationComponent from "./components/notifications/ReactNotificationComponent";

function App() {
  const [show, setShow] = React.useState(false);
  const [notification, setNofication] = React.useState({ title: "", body: "" });

  console.log(show, notification);

  onMessageListener()
    .then((payload) => {
      setShow(true);
      setNofication({
        title: payload.notification.title,
        body: payload.notification.body,
      });
    })
    .catch((err) => console.log("failed: ", err));

  return (
    <div className="App">
      {show ? (
        <ReactNotificationComponent
          title={notification.title}
          body={notification.body}
        />
      ) : (
        <></>
      )}
      <Notifications />
      {/* <Fade text="Hello React" /> */}
    </div>
  );
}

export default App;
