import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
/*import { store } from "./redux/store";
import { Provider } from "react-redux";
<Provider store={store}></Provider>*/

import "./bootstrap";
import ProfileProvider from "./context/ProfileProvider";

ReactDOM.createRoot(document.getElementById("app")).render(
    <BrowserRouter>
        <React.StrictMode>
            <ProfileProvider>
                <App />
            </ProfileProvider>
        </React.StrictMode>
    </BrowserRouter>
);
