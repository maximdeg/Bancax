import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GlobalContextProvider } from "./Context/GlobalContext.jsx";

import AsideNav from "./Components/AsideNav/AsideNav";
import Header from "./Components/Header/Header.jsx";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <GlobalContextProvider>
        <BrowserRouter>
            <>
                <Header />
                <AsideNav />
                <App />
            </>
        </BrowserRouter>
    </GlobalContextProvider>
);
