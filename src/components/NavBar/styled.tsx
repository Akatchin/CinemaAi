import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #2E2E2E;
`;

const Form = styled.form`
    display: flex;
    gap: .5rem;
`;

const Button = styled.button`
    background-color: #F7D354;
    border: 2px solid #F7D354;
    border-radius: 4px;
    color: #000;
    padding: 0.3rem;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: .4s;
    &:hover {
        background-color: transparent;
        color: #F7D354;
    }
`;

const Input = styled.input`
    padding: .2rem .8rem;
    border-radius: 4px;
    border: none;
`;

export {Nav, Form, Button, Input}