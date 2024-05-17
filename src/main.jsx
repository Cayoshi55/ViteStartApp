import React from "react";
import ReactDOM from "react-dom/client";
import AppMain from "./App-main.jsx";
import "./css/index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <AppMain />
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
);
