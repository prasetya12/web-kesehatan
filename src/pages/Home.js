import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import carousel from "../assets/images/carousel.png";
import doctor from "../assets/images/doctor-icon.svg";
import hospital from "../assets/images/hospital-icon.svg";
import axios from 'axios'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Home() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        getArticle()
    }, [])

    const getArticle = () => {
        axios.get('https://newsapi.org/v2/top-headlines', {
            params: {
                country: 'id',
                category: 'health',
                apiKey: 'd7fa1ed901db4d629bcf61f1bd75534d'
            }
        })
            .then(function (response) {
                // handle success

                setNews(response.data.articles.slice(10, 14))
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    console.log(news, 'news')

    return (
        <>
            <Header></Header>
            <div className='carousel mt-3'>
                <div className='bg-white row ' style={{ height: '400px', paddingRight: '150px' }}>
                    <div className='col-6 d-flex justify-content-center flex-column' style={{ paddingLeft: '150px' }}>
                        <div className='fs-4 fw-semibold blue-primary'>
                            Jaga Selalu Kesehatan Anda
                        </div>
                        <div className='mt-3'>
                            Kesehatan adalah sesuatu yang penting bagi setiap manusia,
                            Dapatkan Informasi lengkap dan mudah dengan SehatSehat
                        </div>
                    </div>
                    <div className='col-6 d-flex flex-row-reverse align-items-end'>
                        <img
                            src={carousel}
                            alt="Third slide"
                        />
                    </div>
                </div>
            </div>
            <div className=' bg-menu d-flex justify-content-center py-4' >
                <div className='p-3 blue-primary' style={{ fontSize: '14px', backgroundColor: 'white', borderRadius: '10px', cursor: 'pointer', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                    <img
                        src={hospital}
                        alt="Third slide"
                        style={{ width: '40px', height: '40px' }}
                    /> <span className='ms-2'>Cari Rumah Sakit</span>
                </div>
                <div className='p-3 blue-primary ms-5' style={{ fontSize: '14px', backgroundColor: 'white', borderRadius: '10px', cursor: 'pointer', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                    <img
                        src={doctor}
                        alt="Third slide"
                        style={{ width: '40px', height: '40px' }}
                    /> <span className='ms-2'>Tanya Dokter</span>
                </div>
            </div>
            <div className='artikel mt-4'>
                <div className='container'>
                    <div className='fs-3 fw-normal blue-primary'>
                        Artikel Kesehatan
                    </div>
                    <div className='container-card mt-4 row gap-4'>
                        {news.map((item) => (
                            <a className='card col text-black' href={item.url} style={{ textDecoration: 'none' }} >
                                <div style={{ width: '18rem' }}>
                                    <img src={item.urlToImage} style={{ height: '200px', width: '100%' }}  ></img>
                                    <div class="card-body">
                                        <div className='fw-semibold blue-primary'>
                                            {item.title && item.title.slice(0, 20)}...
                                        </div>
                                        <p class="card-text"> {item.description && item.description.slice(0, 80)}...</p>
                                    </div>
                                </div>
                            </a>
                        ))}

                    </div>
                </div>
            </div>
            <Footer></Footer>

        </>
    )
}