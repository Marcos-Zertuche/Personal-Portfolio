import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements.js";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    {/* <NavLink to="/ML-Projects" activeStyle>
                        Machine Learning Projects
                    </NavLink> */}
                    {/* <NavLink to="/JSON-Search-Engine" activeStyle>
                        JSON Search Engine
                    </NavLink> */}
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;