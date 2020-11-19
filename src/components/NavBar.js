/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from '../assets/labelbridge_logo.png';
import { ArrowRight } from 'react-bootstrap-icons';
//import { HouseDoorFill } from 'react-bootstrap-icons';
import { HouseDoor } from 'react-bootstrap-icons';

function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<a className="navbar-brand text-white text-uppercase" href="#"><img src={logo} alt="logo"/></a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav m-auto">
					<li className="nav-item active">
						<a className="nav-link text-white text-uppercase ml-5" href="#">Home <HouseDoor className="mb-1"/><span className="sr-only">(current)</span></a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-white text-uppercase ml-5" href="#">News <ArrowRight className="ml-4" /></a>
					</li>
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle text-white text-uppercase ml-5" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Dropdown
        </a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<a className="dropdown-item" href="#">Action</a>
							<a className="dropdown-item" href="#">Another action</a>
							<div className="dropdown-divider"></div>
							<a className="dropdown-item" href="#">Something else here</a>
						</div>
					</li>
					<li className="nav-item">
						<a className="nav-link disabled text-white text-uppercase ml-5" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
					</li>
				</ul>
				<form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
					<button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
				</form>
			</div>
		</nav>
	);
}

export default NavBar;

