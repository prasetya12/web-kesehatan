import Carousel from 'react-bootstrap/Carousel';
import {
    Row,
    Col,
} from "react-bootstrap";
import Blog from "../components/Card";
import art1 from "../assets/images/artikel1.jpg";
import art2 from "../assets/images/artikel2.jpg";
import art3 from "../assets/images/artikel3.jpg";
import Header from '../components/Header';


const BlogData = [
    {
        image: art1,
        title: "Bolehkah Penderita Diabetes Minum Kopi? Ikuti Aturannya Ya!",
        subtitle: "",
        description:
            "Mungkin Diabestfriends sering bertanya-tanya, bolehkah penderita diabetes minum kopi? Beberapa orang berpendapat bahwa sebaiknya penderita diabetes tidak minum kopi, sementara sebagian lainnya ...",
        btnbg: "primary",
    },
    {
        image: art2,
        title: "Ngidam Enggak Dituruti Bikin Anak Sering Ngeces, Mitos atau Fakta?",
        subtitle: "",
        description:
            "Mums pasti sering dengar deh mitos yang bilang kalau ngidam Mums selama hamil enggak dituruti, maka waktu si Kecil lahir, ia akan sering ngeces atau ileran.Wah, kira-kira benar ... ",
        btnbg: "primary",
    },
    {
        image: art3,
        title: "Penyebab Keringat Berlebih pada Balita",
        subtitle: "",
        description:
            "Sangat wajar jika seseorang berkeringat karena melakukan aktivitas, terlebih jika aktivitas tersebut cukup berat. Namun, bagaimana jika keringat yang keluar justru berlebihan, apalagi dialami oleh si Kecil yang masih berusia balita. Nah, untuk ...",
        btnbg: "primary",
    }
];


export default function Artikel() {
    return (
        <>
            <Header></Header>

                <h5 class='artikel-title'>Semua Artikel</h5>
                <div className='carousel-artikel' >
                    <Carousel>
                        <Carousel.Item>
                            <img
                                class='img-carousel'
                                src={'https://static.guesehat.com/static/article/cara_benar_untuk_buang_popok_masih_banyak_yang_salah_guesehat_1670423980.jpg'}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Cara Benar Buang Popok Bayi, Masih Banyak Yang Salah ! </h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                class='img-carousel'
                                src={'https://static.guesehat.com/static/article/wajah_jadi_bengkak_saat_hamil_ketahui_cara_mengatasinya_1669122867.jpg'}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Wajah Jadi Bengkak saat Hamil, Ketahui Cara Mengatasinya</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                class='img-carousel'
                                src={'https://static.guesehat.com/static/article/tips_memilih_daycare_yang_tepat_untuk_anak_1670251607.jpg'}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Tips Memilih Daycare yang Tepat untuk Anak</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            <div class='container'>

                <Row>
                    {BlogData.map((blg) => (
                        <Col sm="6" lg="6" xl="4">
                            <Blog
                                image={blg.image}
                                title={blg.title}
                                subtitle={blg.subtitle}
                                text={blg.description}
                                color={blg.btnbg}
                            />
                        </Col>
                    ))}
                </Row>

                <h2 class='style-title'>Kumpulan Artikel Hidup Sehat</h2>
                <p class='style-p'>Tahukah Kamu apa saja yang mendukung kebiasaan gaya hidup sehat? Apakah hanya dari faktor makanan, minuman, atau olahraga? Ternyata banyak sekali faktor yang memengaruhi seseorang untuk menerapkan gaya hidup sehat. Salah satu yang sering terlupakan adalah membaca artikel kesehatan tentang gaya hidup sehat.
                    Jika Kamu seorang atlet, tetapi tidak didukung oleh aktivitas lain seperti tidur cukup dan menerapkan pola makan sehat, sudah pasti tubuhmu akan cepat lelah dan tidak bugar. Namun rasanya, sebagai seorang atlet, Kamu tentu sudah tahu apa yang harus dilakukan untuk mendukung kesehatanmu. Hanya saja, Kamu mungkin melupakan pentingnya menambah pengetahuan untuk hidup lebih sehat, misalkan dengan membaca tips hidup sehat terbaru seperti yang sedang dijalankan oleh anak milenial saat ini.</p>
                <p class='style-p'>Di lain sisi, dalam menerapkan pola hidup sehat awalnya memang terkesan mudah, tetapi kenyataannya cukup sulit saat dilakukan. Untuk itu, agar aksi sehatmu berjalan lancar, Kamu perlu memiliki panduan tentang tips hidup sehat dari ahlinya. </p>
                <p class='style-p'>Artikel gaya hidup di Guesehat.com adalah jawabannya. Kamu akan menemukan kumpulan artikel gaya hidup sehat terbaru dan berbeda setiap harinya. Dan, yang terpenting jiwamu akan tetap sehat karena terhibur dengan artikel-artikel menarik di Guesehat.</p>
                <p class='style-p'>Yuk, rasakan serunya sehat bareng Kami!</p>
            </div>
        </>
    )
}

