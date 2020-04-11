import React from "react";

class NavigationComponent extends React.Component{
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">HOME</a>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                        <a className="nav-item nav-link" href="/signup">SignUp</a>

                    </div>
                </div>
            </nav>
        );
    }
}

export default NavigationComponent;