

import React from 'react'
import {
  Card,
  Row,
  Col,
  Button
} from "react-bootstrap";
import eyes from "../assets/images/eyes.jpg";
import bones from "../assets/images/bones.jpg";
import cancer from "../assets/images/cancer.jpg";
import obat from "../assets/images/obat.jpg";
import paru from "../assets/images/paru2.jpg";
import tht from "../assets/images/tht.png";
import jantung from "../assets/images/jantung.jpg";
import pencernaan from "../assets/images/pencernaan.jpg";
import otak from "../assets/images/otak.jpg";
import nutrisi from "../assets/images/nutrisi.jpg";
import gigi from "../assets/images/gigi.jpg";
import hamil from "../assets/images/hamil.jpg";
import SimpleCard from '../components/Simplecard';

const SimpleCardData = [
  {
    image: eyes,
    title: "Kesehatan Mata",
    subtitle: "",
    description:
      "Mungkin Diabestfriends sering bertanya-tanya, bolehkah penderita diabetes minum kopi? Beberapa orang berpendapat bahwa sebaiknya penderita diabetes tidak minum kopi, sementara sebagian lainnya ...",
    link: "#",
  },
  {
    image: jantung,
    title: "Jantung",
    subtitle: "",
    description:
      "Mungkin Diabestfriends sering bertanya-tanya, bolehkah penderita diabetes minum kopi? Beberapa orang berpendapat bahwa sebaiknya penderita diabetes tidak minum kopi, sementara sebagian lainnya ...",
    link: "#",
  },
  {
    image: bones,
    title: " Tulang",
    subtitle: "",
    description:
      "Mungkin Diabestfriends sering bertanya-tanya, bolehkah penderita diabetes minum kopi? Beberapa orang berpendapat bahwa sebaiknya penderita diabetes tidak minum kopi, sementara sebagian lainnya ...",
    link:"#",
  },
  {
    image: cancer,
    title: "Kanker"    ,
    subtitle: "",
    description:
      "Mungkin Diabestfriends sering bertanya-tanya, bolehkah penderita diabetes minum kopi? Beberapa orang berpendapat bahwa sebaiknya penderita diabetes tidak minum kopi, sementara sebagian lainnya ...",
    link:"#",
  },
  {
    image: paru,
    title: "Pernafasan"    ,
    subtitle: "",
    description:
      "Mungkin Diabestfriends sering bertanya-tanya, bolehkah penderita diabetes minum kopi? Beberapa orang berpendapat bahwa sebaiknya penderita diabetes tidak minum kopi, sementara sebagian lainnya ...",
    link:"#",
  },
  {
    image: obat,
    title: "Obat-obatan"    ,
    subtitle: "",
    description:
      "Mungkin Diabestfriends sering bertanya-tanya, bolehkah penderita diabetes minum kopi? Beberapa orang berpendapat bahwa sebaiknya penderita diabetes tidak minum kopi, sementara sebagian lainnya ...",
    link: "#",
  },
  {
    image: tht,
    title: "Kesehatan THT"    ,
    subtitle: "",
    description:
      "Mungkin Diabestfriends sering bertanya-tanya, bolehkah penderita diabetes minum kopi? Beberapa orang berpendapat bahwa sebaiknya penderita diabetes tidak minum kopi, sementara sebagian lainnya ...",
    link:"#",
  },
  {
    image: pencernaan,
    title: "Pencernaan"    ,
    subtitle: "",
    description:
      "Mungkin Diabestfriends sering bertanya-tanya, bolehkah penderita diabetes minum kopi? Beberapa orang berpendapat bahwa sebaiknya penderita diabetes tidak minum kopi, sementara sebagian lainnya ...",
    link: "#",
  },
  {
    image: otak,
    title: "Otak dan Syaraf"    ,
    subtitle: "",
    description:
      "Mungkin Diabestfriends sering bertanya-tanya, bolehkah penderita diabetes minum kopi? Beberapa orang berpendapat bahwa sebaiknya penderita diabetes tidak minum kopi, sementara sebagian lainnya ...",
    link: "#",
  },
  {
    image: nutrisi,
    title: "Nutrisi"    ,
    subtitle: "",
    description:
      "Mungkin Diabestfriends sering bertanya-tanya, bolehkah penderita diabetes minum kopi? Beberapa orang berpendapat bahwa sebaiknya penderita diabetes tidak minum kopi, sementara sebagian lainnya ...",
    link:"#",
  },
  {
    image: gigi,
    title: "Kesehatan Gigi"    ,
    subtitle: "",
    description:
      "Mungkin Diabestfriends sering bertanya-tanya, bolehkah penderita diabetes minum kopi? Beberapa orang berpendapat bahwa sebaiknya penderita diabetes tidak minum kopi, sementara sebagian lainnya ...",
    link: "#",
  },
  {
    image: hamil,
    title: "Kehamilan"    ,
    subtitle: "",
    description:
      "Mungkin Diabestfriends sering bertanya-tanya, bolehkah penderita diabetes minum kopi? Beberapa orang berpendapat bahwa sebaiknya penderita diabetes tidak minum kopi, sementara sebagian lainnya ...",
    link: "#",
  },
];

export default function Kategori() {
    return (
        
    <div class='container'>      
      <h3 className="mb-3 text-center" style={{marginTop:'20px'}}>Pilih Kategori</h3>
    <Row>
        {SimpleCardData.map((blg) => (
          <Col sm="6" lg="6" xl="2">
            <SimpleCard
              image={blg.image}
              title={blg.title}
              link={blg.link}
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
    )
}

