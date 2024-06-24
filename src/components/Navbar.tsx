import { Link } from "react-router-dom";
import { Nav, Form, Input, Button } from "./styled.tsx";
import { BiCameraMovie, BiRadioCircle, BiSearchAlt2 } from "react-icons/bi";

export const Navbar = () => {
    return (
        <Nav>
            <h2>
                <Link to="/"><BiCameraMovie/> CinemaAi</Link>
            </h2> 
            <Form>
                <Input type="text" placeholder="Busque um filmes"/>
                <Button type="submit">
                    <BiSearchAlt2/>
                </Button>
            </Form>
        </Nav>
    )
}