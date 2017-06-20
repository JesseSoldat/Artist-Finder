import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
// import { Route, RouteHandler, Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

const TopBar = () => (
<Navbar inverse collapseOnSelect>
	<Navbar.Header>
		<Navbar.Brand>
			<a>Artist Finder</a>
		</Navbar.Brand>
		<Navbar.Toggle />
	</Navbar.Header>
	<Navbar.Collapse>
		<Nav>
			<NavItem eventKey={1} >Link</NavItem>
			<NavItem eventKey={2} >Link</NavItem>
			<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
				<MenuItem eventKey={3.1}>Action</MenuItem>
				<MenuItem eventKey={3.2}>Another action</MenuItem>
				<MenuItem eventKey={3.3}>Something else here</MenuItem>
				<MenuItem divider />
				<MenuItem eventKey={3.3}>Separated link</MenuItem>
			</NavDropdown>
		</Nav>
		<Nav pullRight>
			<LinkContainer to="/home">
				<NavItem eventKey={1}>Home</NavItem>
			</LinkContainer>
			<LinkContainer to="/book">
				<NavItem eventKey={2}>Book Inv</NavItem>
			</LinkContainer>
			<NavDropdown eventKey={3} title="Authorization" id="basic-nav-dropdown">
				<LinkContainer to="/logout">
					<MenuItem eventKey={3.1}>Logout</MenuItem>
				</LinkContainer>
			</NavDropdown> 
		</Nav>
	</Navbar.Collapse>
</Navbar>
)

export default TopBar;
