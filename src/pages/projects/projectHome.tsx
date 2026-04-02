import { NavLink } from "react-router";

function ProjectHome() {
    return (
        <div>
            <h2>Here are some projects I've worked on. Some basic, some fancy.</h2>
            <div className="project-navigation-container">
                <NavLink to="loops" className={"project-navigation"}>Loops and iteration demo's</NavLink>
                <NavLink to="memorial"className={"project-navigation"}>RIP</NavLink>
                <NavLink to="storyboard" className={"project-navigation"}>Chart a story!</NavLink>
                <NavLink to="house" className={"project-navigation"}>Explore a house!</NavLink>
            </div>
        </div>
    )
}

export default ProjectHome;
