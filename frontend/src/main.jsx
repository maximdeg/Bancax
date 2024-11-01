import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GlobalContextProvider } from "./Context/GlobalContext.jsx";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <GlobalContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </GlobalContextProvider>
);
