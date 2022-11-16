import React from "react";
import ReactDOM from "react-dom/client";
import { AppContext } from "./_context/AppContext";
import QueryProvider from "./_queries/QueryProvider";
import RoutesApp from "./_routes/RoutesApp";
import "./_styles/index.css";

ReactDOM.createRoot(document.querySelector("#root") as HTMLElement).render(
    <React.StrictMode>
        <AppContext>
            <QueryProvider>
                <RoutesApp />
            </QueryProvider>
        </AppContext>
    </React.StrictMode>,
);
