import { NavLink } from "react-router";

function ProjectHome() {
    return (
        <div>
            <h1>This is the homepage for projects to show off my skills</h1>
            <div className="project-navigation-container">
                <NavLink to="loops" className={"project-navigation"}>Loops and iteration demo's</NavLink>
                <NavLink to="memorial"className={"project-navigation"}>RIP</NavLink>
                <NavLink to="storyboard" className={"project-navigation"}>Chart a story!</NavLink>
            </div>
        </div>
    )
}

export default ProjectHome;
