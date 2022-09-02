import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu class="navMenu">
		<NavLink to="/" activeStyle>
			Home
		</NavLink>
		{/* <NavLink to="calculator" activeStyle>
			Use Calculator Without Login
		</NavLink> */}
		<NavLink to="/contact" activeStyle>
			Contact Me
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
