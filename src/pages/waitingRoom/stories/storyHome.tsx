import { NavLink } from "react-router";

function StoryHome() {
    return (
        <>
            <div>
                <h1>This is the homepage for stories I've written.</h1>
            </div>
            <NavLink to="test-story">
                <h4>Test Story Page</h4>
            </NavLink>
        </>
    )
}

export default StoryHome;