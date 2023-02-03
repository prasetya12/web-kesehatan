import React, { useState, useEffect, } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from "react-router-dom";
import Button from '../components/Button'
import Modal from 'react-bootstrap/Modal';
import { Button as ButtonBootstrap } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

export default function Header() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState(null);
    const handleClose = () => setShow(false);
    const btnClick = () => {
        setShow(true)
        // navigate('/tanya-dokter')
    }
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(() => {
        const _profile = localStorage.getItem("users");
        const con_profile = JSON.parse(_profile)
        setProfile(con_profile)
    }, [])

    useEffect(
        () => {

            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        console.log(res, 'user')

                        setProfile(res.data);
                        localStorage.setItem("users", JSON.stringify(res.data));
                        setShow(false)
                    })
                    .catch((err) => console.log(err));
            }
        },
        [user]
    );

    return (
        <>
            <Navbar className='navbar-header'>
                <Container>
                    <Navbar.Brand href="/">
                        <div className='fs-4 blue-primary fw-semibold'>
                            SehatSehat

                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Nav className="justify-content-end flex-grow-1 pe-3 d-flex align-items-center">
                        <Nav.Link href="/artikel">Artikel</Nav.Link>
                        <Nav.Link href="/hospital">Info Rumah Sakit</Nav.Link>


                        {
                            profile ? (<Image className='ms-5' roundedCircle style={{ width: '50px' }}
                                src={profile.picture}
                            />) : (
                                <Button className="fw-normal ms-4" onClick={btnClick}>
                                    Login
                                </Button>
                            )
                        }

                    </Nav>
                </Container>
            </Navbar>
            <Modal show={show} onHide={handleClose} animation={false}>

                <Modal.Body className='p-5'>
                    <div className='fs-4 blue-primary fw-semibold text-center'>
                        SehatSehat

                    </div>
                    <div className='text-center fs-7 justify-center mt-3'>
                        Kamu bisa login SehatSehat menggunakan login Google
                    </div>
                    <div className='d-flex mt-4 justify-content-center  '>
                        {/* <GoogleLogin
                            onSuccess={handleSignIn}
                            onFailure={error => setError(error.message)}

                            clientId={clientId}
                            buttonText="Login with Google"
                            cookiePolicy={'single_host_origin'}
                        /> */}
                        <ButtonBootstrap className="w-100 py-100 fw-normal flex items-center" size="lg" variant="outline-secondary" onClick={() => login()}>
                            <img src='/icons/icon-google.png' style={{ width: '20px' }}></img> <span className='ms-2 fs-6'>Login dengan akun <b>Google</b></span>
                        </ButtonBootstrap>

                    </div>
                    <div className='text-center mt-3 ' onClick={() => { setShow(false) }} style={{ cursor: 'pointer' }}>
                        Batal
                    </div>
                </Modal.Body>

            </Modal>
        </>
    )
}