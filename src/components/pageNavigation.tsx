import { HashRouter, Route, Routes } from "react-router";
import App from '../App.tsx'
import ProjectHome from "../pages/projects/projectHome.tsx";
import LoopDemoPage from "../pages/projects/loopingDemoPage.tsx";
import FauxMemorial from "../pages/projects/fauxMemorialPage.tsx";
import StoryboardTool from "../pages/projects/storyboardHelper.tsx";

function PageNavigation() {
    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route element={<App />} path="/">
                        <Route path="projects">
                            <Route index element={<ProjectHome />} />
                            <Route path="loops" element={<LoopDemoPage />} />
                            <Route path="memorial" element={<FauxMemorial />} />
                            <Route path="storyboard" element={<StoryboardTool />} />
                        </Route>
                    </Route>
                </Routes>
            </HashRouter>
        </div>
    )
}

export default PageNavigation;
