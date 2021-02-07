import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "@containers/App";

export default function renderApp() {
    const rootEl = document.getElementById("root");
    const AppInstance = (
        <HashRouter>
            <App />
        </HashRouter>
    );

    render(AppInstance, rootEl);
}
