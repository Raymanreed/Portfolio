import { NavLink } from "react-router";

function ProjectHome() {
    return (
        <div>
            <h1>This is the homepage for projects to show off my skills</h1>
            <div>
                <h3>
                    <NavLink to="loops">Loops and iteration demo's</NavLink>
                    <NavLink to="memorial">RIP</NavLink>
                    <NavLink to="storyboard">Chart a story!</NavLink>
                </h3>
            </div>
        </div>
    )
}

export default ProjectHome;
