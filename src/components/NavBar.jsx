import React from 'react'

import {Navbar} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import $ from 'jquery'








export default function NavBar() {













    return(
        <Navbar bg="light" variant="light" fixed='top'>

            <Navbar.Brand className='links linktitle' href="#header">CV</Navbar.Brand>

            <input className="burger"  type="checkbox"  />



            <Nav className="mr-auto inline hidden ">
                <ul className='menu'>
                    <li><Nav.Link className='links' href="#header">ACCUEIL</Nav.Link></li>
                    <li><Nav.Link className='links' href="#profil">PROFIL</Nav.Link></li>
                    <li><Nav.Link className='links' href="#competences">COMPETENCES</Nav.Link></li>
                    <li><Nav.Link className='links' href="#experiences">EXPERIENCES</Nav.Link></li>
                    <li><Nav.Link className='links' href="#realisations">REALISATONS</Nav.Link></li>
                    <li><Nav.Link className='links' href="#contact">CONTACT</Nav.Link></li>
                </ul>
            </Nav>
        </Navbar>
    )

}
