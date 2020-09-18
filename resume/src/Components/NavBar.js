import React from "react";
import {Navbar, Nav, Button} from "react-bootstrap";
import resume from "../Constants/resume.pdf"
import {useScrollTo} from "react-use-window-scroll";

export const NavBar = () => {
    const scrollTo = useScrollTo();
    return(
        <Navbar fixed="top" bg="light" variant="light" >
            <Nav className={"container-fluid"}>
                <Nav.Item>
                    <label className="homeButton" onClick={() => scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>Home</label>
                </Nav.Item>
                <Nav.Item className={"ml-auto"}>
                    <Button variant="outline-dark" href={resume} download="resume">Download Resume</Button>
                </Nav.Item>
            </Nav>
        </Navbar>
    )
}