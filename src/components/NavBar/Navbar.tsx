import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiRadioCircle, BiSearchAlt2 } from "react-icons/bi";

import { Nav, Form, Input, Button } from "./styled.tsx";

export const Navbar = () => {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(search)
        if(!search) return
        navigate(`/search?q=${search}`);
        setSearch("")
    }

    return (
        <Nav>
            <h2 style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <Link to="/"><BiCameraMovie/> CinemaAi</Link>
            </h2> 
            <Form onSubmit={handleSubmit} >
                <Input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Busque um filmes"/>
                <Button type="submit">
                    <BiSearchAlt2/>
                </Button>
            </Form>
        </Nav>
    )
}