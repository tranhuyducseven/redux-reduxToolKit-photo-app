import React from 'react'
import { NavLink } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import './Header.scss'
function Header() {
    return (
        <header className="header">
            <Container>
                <Row className="">
                    <Col xs="auto">
                        <a
                            className="header__link header__title"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.facebook.com/tranhuyducseven">Huy Duc</a>
                    </Col>
                    <Col>
                        <NavLink
                            to="/photos"
                            className={(navData) => navData.isActive ? 'header__link header__link--active' : 'header__link'}

                        >
                            Project
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

Header.propTypes = {

}

export default Header

