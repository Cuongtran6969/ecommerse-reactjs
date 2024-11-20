import Blog from "@components/Blog/Blog";
import HomePage from "@components/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routers from "@/routers/routers";
import { Suspense } from "react";

function App() {
    return (
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
    );
}

export default App;
