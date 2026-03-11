import { BrowserRouter, Route, Routes } from "react-router";
import App from '../App.tsx'
import TestPage from '../pages/testPages.tsx'
import NestedTestPage from '../pages/nestedTestPage.tsx'
import StoryHome from '../pages/stories/storyHome.tsx'
import BasePage from "../pages/basePage.tsx";
import TestStoryPage from "../pages/stories/testStoryPage.tsx";
import ProjectHome from "../pages/projects/projectHome.tsx";
import LoopDemoPage from "../pages/projects/loopingDemoPage.tsx";
import FauxMemorial from "../pages/projects/fauxMemorialPage.tsx";
import StoryboardTool from "../pages/projects/storyboardHelper.tsx";

function PageNavigation() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<App />}>
                        <Route index element={<BasePage />} />
                        <Route path="test" element={<TestPage />} />
                        <Route path="nested" element={<NestedTestPage />} />
                        <Route path="stories">
                            <Route index element={<StoryHome />} />
                            <Route path="test-story" element={<TestStoryPage />} />
                        </Route>
                        <Route path="projects">
                            <Route index element={<ProjectHome />} />
                            <Route path="loops" element={<LoopDemoPage />} />
                            <Route path="memorial" element={<FauxMemorial />} />
                            <Route path="storyboard" element={<StoryboardTool />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default PageNavigation;
