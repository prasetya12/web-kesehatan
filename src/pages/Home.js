import React from 'react'
import Button from '../components/Button'
import { useNavigate } from "react-router-dom";
export default function Home() {
    const navigate = useNavigate();

    const btnClick = () => {
        navigate('/artikel')
    }
    return (
        <>
            <Button className="fw-normal" onClick={btnClick}>
                Home
            </Button>
        </>
    )
}