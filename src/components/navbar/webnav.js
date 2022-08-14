import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { PokedexSvg } from '../../res/svgs/vectors';

function Webnav() {
    return (
        <Navbar className='mynav w-100' bg="light" expand="lg">
            <Container className='m-0 p-0 w-100 container-fluid'>
                <Navbar.Brand className='logo' href="/">
                    <PokedexSvg className='img img-fuild'></PokedexSvg>
                </Navbar.Brand>
                <Navbar.Brand href="/"><h3 className='my-0'>Pokedex</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='m-0 ml-4'>
                        <Nav.Link href="/pokedex">Pokemons</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <NavDropdown title="See more" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Webnav;