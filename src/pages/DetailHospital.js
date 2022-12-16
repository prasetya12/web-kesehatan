import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import { useParams } from 'react-router-dom';
import { data } from '../assets/data'
import hospital from "../assets/images/hospital.png";

export default function DetailHospital() {
    let { id } = useParams();
    const [rumahsakit, setRumahsakit] = useState()

    useEffect(() => {
        const getData = data.find(item => item.id == id)
        setRumahsakit(getData)
    }, [])


    return (
        <>
            <Header></Header>
            <div className="container mt-5 d-flex flex-column">
                <div className="fs-3 " style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.125)', paddingBottom: '10px' }}>
                    {rumahsakit && rumahsakit.name}
                </div>
                <div>
                    <img className="mt-5" src={hospital} />

                </div>
                <div>
                    <div className="mt-3 fs-5">Alamat</div>
                    <div className="mt-2">
                        {rumahsakit && rumahsakit.location}
                    </div>
                    <div className="mt-3 fs-5">Daily Open</div>
                    <div className="mt-2">
                        {rumahsakit && rumahsakit.daily_open}
                    </div>
                    <div className="mt-3 fs-5">Tentang</div>
                    <p className="mt-2">{rumahsakit && rumahsakit.description}</p>
                </div>
            </div>
        </>
    )
}