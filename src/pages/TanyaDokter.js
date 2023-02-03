import React, { useEffect, useState } from 'react'
import Header from "../components/Header"
import Button from '../components/Button'
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'

export default function TanyaDokter() {
    const [show, setShow] = useState(false);
    const [data, setData] = useState([]);
    const [profile, setProfile] = useState()

    const [name, setName] = useState('')
    const [ask, setAsk] = useState('')


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        getQuestion()

        const _profile = localStorage.getItem("users");
        const con_profile = JSON.parse(_profile)
        setProfile(con_profile)
        setName(con_profile.name)
        console.log(profile)

    }, [])
    const getQuestion = () => {
        axios.get('https://6311f91ef5cba498da8988fd.mockapi.io/api/v1/askquestion?sortBy=id&order=desc')
            .then(function (response) {
                setData(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    const sendQuestion = () => {
        var today = new Date();
        const payload = {
            createdAt: today,
            name,
            ask,
            answer: '',
            answer_name: ''

        }

        axios.post('https://6311f91ef5cba498da8988fd.mockapi.io/api/v1/askquestion', payload)
            .then(function (response) {
                setName('')
                setAsk('')
                handleClose()
                getQuestion()
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })


    }

    return (
        <>
            <Header></Header>
            <div className="container mt-5 d-flex flex-column">
                <h4 className="mb-3" style={{ marginTop: '20px' }}> Tanya Dokter</h4>
                <div>
                    <div>
                        <Button className="fw-normal" onClick={handleShow} >
                            Buat Pertanyaan
                        </Button>
                    </div>
                </div>
                <div style={{ marginTop: '40px' }}>
                    {data.map((item) => (
                        <div className='p-4 d-flex flex-column' style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.125)', paddingBottom: '10px' }}>
                            <div className='d-flex flex-row'>
                                <div className='text-white fs-2 d-flex align-items-center justify-content-center' style={{ width: '50px', height: '50px', backgroundColor: 'rgb(162, 190, 162)', borderRadius: '50px' }}>
                                    A
                                </div>
                                <div className='ms-4'>
                                    <div className='fw-semibold'>{item.ask}</div>
                                    <div className='align-self-end'>
                                        Oleh: {item.name}
                                    </div>
                                    <div className='fs-7'>{item.createdAt}</div>
                                </div>
                            </div>
                            <div className='mt-3'>{item.answer}</div>
                            <div className='blue-primary'>Dijawab oleh dr Fadia</div>
                        </div>
                    ))}


                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Tanya Dokter</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Nama</label>
                        <input value={name} onChange={e => setName(e.target.value)} type="email" class="form-control" id="exampleFormControlInput1" placeholder="nama" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Pertanyaan</label>
                        <textarea value={ask} onChange={e => setAsk(e.target.value)} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" onClick={sendQuestion}>
                        Send
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}