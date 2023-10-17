// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { BrowserRouter as Router } from "react-router-dom";
// import Context, { AuthContext, FirebaseProvider } from "./store/Context";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <FirebaseProvider>
//       <Context>
//         <Router>
//           <App />
//         </Router>
//       </Context>
//     </FirebaseProvider>
//   </React.StrictMode>
// );

// index.js or App.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { FirebaseProvider, AuthProvider } from "./store/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <AuthProvider>
        <Router>
          <App />
        </Router>
      </AuthProvider>
    </FirebaseProvider>
  </React.StrictMode>
);
