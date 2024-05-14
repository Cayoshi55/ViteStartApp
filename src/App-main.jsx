import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Theme";
import Sidebar from "./components/Public/Sidebar";

// add Pagesss
import Home from "./View/Admin/home-admin";
import HomeUser from "./View/User/home-User";
import About from "./components/Public/about";
import Topbar from "./components/Public/topbar";
import TopbarUser from "./components/Public/topbar-user";
import BottomPage from "./components/Public/bottomPage";
//---1
function App() {
    const [theme, colorMode] = useMode();
    console.log(theme);
    console.log(theme.palette.mode);
    const [isSidebar, setIsSidebar] = useState(true);
    const [UserRole, setUserRole] = useState(1);
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div data-theme={theme.palette.mode} className="app element">
                    {UserRole == 0 && <Sidebar isSidebar={isSidebar} />}
                    <main className="content">
                        {UserRole == 0 ? (
                            <Topbar setIsSidebar={setIsSidebar} />
                        ) : (
                            <TopbarUser setIsSidebar={setIsSidebar} />
                        )}
                        <Routes>
                            {UserRole == 1 ? (
                                <Route path="/" element={<HomeUser />} />
                            ) : (
                                <Route path="/" element={<Home />} />
                            )}
                            <Route path="/about" element={<About />} />
                        </Routes>
                    </main>
                </div>
                <div data-theme={theme.palette.mode}>
                    <BottomPage />
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
