import React, { useState } from "react"
import Header from "../components/Header"
import Button from '../components/Button'
import hospital from "../assets/images/hospital.png";
import { data } from '../assets/data'
import { Nav } from "react-bootstrap";
export default function Hospital() {
    const [datarumahsakit, setRumahsakit] = useState(data)
    const [search, setSearch] = useState('')

    const btnClick = () => {
        console.log(search, 'sea')
        if (search.length > 0) {
            const found = searchInArray(search, data, "name")

            setRumahsakit(found)
        } else {


            setRumahsakit(data)

        }

    }

    const searchInArray = (searchQuery, array, objectKey = null) => {

        return array.filter(d => {
            let data = objectKey ? d[objectKey] : d //Incase If It's Array Of Objects.
            let dataWords = typeof data == "string" && data?.split(" ")?.map(b => b && b.toLowerCase().trim()).filter(b => b)
            let searchWords = typeof searchQuery == "string" && searchQuery?.split(" ").map(b => b && b.toLowerCase().trim()).filter(b => b)

            let matchingWords = searchWords.filter(word => dataWords.includes(word))

            return matchingWords.length

        })


    }

    return (<>
        <Header></Header>
        <div className="container mt-5 d-flex align-items-center flex-column">
            <div className="fs-3 ">Cari Rumah Sakit</div>
            <div className="mt-3">
                <div >
                    <input value={search} type='text' style={{ height: '40px', width: '350px', borderRadius: '16px' }} onChange={(e) => setSearch(e.target.value)} />
                    <Button className="fw-normal ms-4" onClick={btnClick}>
                        Cari
                    </Button>
                </div>
            </div>
            <div className="mt-5">
                {
                    datarumahsakit.map((item, index) => (
                        <div className="d-flex flex-row gap-3 mt-3" style={{ border: '1px solid rgba(0, 0, 0, 0.125)', padding: '22px', borderRadius: '16px' }} key={index}>
                            <div>
                                <img src={hospital} style={{ width: '150px', borderRadius: '16px' }} />
                            </div>
                            <div>
                                <div className="fw-semibold">
                                    <Nav.Link href={`/detail-hospital/${item.id}`}>
                                        {item.name}
                                    </Nav.Link>


                                </div>
                                <div className="mt-3">
                                    {item.location}
                                </div>
                                <div>
                                    {item.phone}

                                </div>
                            </div>
                        </div>
                    ))
                }


            </div>

        </div>
    </>)
}