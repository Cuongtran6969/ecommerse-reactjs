import { BrowserRouter, Route, Routes } from "react-router-dom";
import routers from "@/routers/routers";
import { Suspense } from "react";
import { SidebarProvider } from "@/contexts/SidebarProvider";
import SideBar from "@components/Sidebar/Sidebar";
import { ToastProvider } from "@/contexts/ToastProvider";
import { StoreProvider } from "@/contexts/StoreProvider";

function App() {
    return (
        <StoreProvider>
            <ToastProvider>
                <SidebarProvider>
                    <SideBar />
                    <BrowserRouter>
                        <Suspense fallback={<div>Loading....</div>}>
                            <Routes>
                                {routers.map((item, index) => {
                                    let Page = item.component;
                                    return (
                                        <Route
                                            key={index}
                                            path={item.path}
                                            element={<Page />}
                                        />
                                    );
                                })}
                            </Routes>
                        </Suspense>
                    </BrowserRouter>
                </SidebarProvider>
            </ToastProvider>
        </StoreProvider>
    );
}

export default App;
