import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ProfileProvider from "./context/ProfileProvider";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./app";
import "./bootstrap";


ReactDOM.createRoot(document.getElementById("app")).render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <ProfileProvider>
                    <App />
                </ProfileProvider>
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
);
