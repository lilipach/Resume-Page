import React from "react";
import {Navbar, Nav, Button} from "react-bootstrap";
import resume from "../Constants/resume.pdf"

const scroll = () => {
    window.scrollTo({top:0, behavior: "smooth"})
}

export const NavBar = () => {
    return(
        <Navbar fixed="top" bg="light" variant="light" >
            <Nav className={"container-fluid"}>
                <Nav.Item>
                    <label className="homeButton" onClick={() => scroll()}>Home</label>
                </Nav.Item>
                <Nav.Item className={"ml-auto"}>
                    <Button variant="outline-dark" href={resume} download="resume">Download Resume</Button>
                </Nav.Item>
            </Nav>
        </Navbar>
    )
}