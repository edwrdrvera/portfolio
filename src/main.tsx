import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "@/components/common/ThemeProvider/ThemeProvider";
import "../src/app/App.css";
import App from "./app/App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>
);
