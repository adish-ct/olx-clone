import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FirebaseContext } from "./Store/FirebaseContext";
import firebase from "./Firebase/config";

// import Context from "./Store/FirebaseContext";

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>
// );
