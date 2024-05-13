import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Theme";
import Sidebar from "./components/Public/Sidebar";

// add Pagesss
import Home from "./View/home"
import About from "./components/Public/about";
import Topbar from "./components/Public/topbar";
import BottomPage from "./components/Public/bottomPage";
//---1
function App() {
    const [theme, colorMode] = useMode();
    console.log(theme.palette.mode)
    const [isSidebar, setIsSidebar] = useState(true);
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider  theme={theme}>
                <CssBaseline />
                <div data-theme={theme.palette.mode} className="app">
                    <Sidebar isSidebar={isSidebar} />
                    <main className="content">
                        <Topbar setIsSidebar={setIsSidebar} />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                        </Routes>
                    </main>
                </div>
                <BottomPage />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
