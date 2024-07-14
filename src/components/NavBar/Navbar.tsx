import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import { TextAnimation } from "../TextAnimation/TextAnimation.tsx";
import { Nav, Form, Input, Button } from "./styled.tsx";
import { FaHeart } from "react-icons/fa6";

export const Navbar = () => {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if(!search) return;
        navigate(`/search?q=${search}`);
        setSearch("");
    }
           
    return (
        <Nav>
            <h2 style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <BiCameraMovie style={{marginRight: "10px", color: "#F7D354"}}/>
                <Link style={{color: "#F7D354"}} to="/">
                <TextAnimation text="Seja bem-vindo" text2 ="CinemaAi"interval={200}/>
                </Link>
            </h2> 
            <Form onSubmit={handleSubmit} >
                <Input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Busque um filme"/>
                <Button type="submit">
                    <BiSearchAlt2/>
                </Button>
                <Button>
                    <Link to="/favorites">
                        <FaHeart/>
                    </Link>
                </Button>
            </Form>
        </Nav>
    )
}