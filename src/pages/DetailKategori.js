

import React from 'react'
import {
  Card,
  Row,
  Col,
  Button
} from "react-bootstrap";
import eyes from "../assets/images/eyes.jpg";
import AccordionBasic from '../components/Accordion';

const accordData = [
  {
    header:"Kesatu #1",
    body: "Mungkin Diabestfriends sering bertanya-tanya, bolehkah penderita diabetes minum kopi? Beberapa orang berpendapat bahwa sebaiknya penderita diabetes tidak minum kopi, sementara sebagian lainnya ...",
  },
  {
    header:"Kesatu #1",
    body: "Mungkin Diabestfriends sering bertanya-tanya, bolehkah penderita diabetes minum kopi? Beberapa orang berpendapat bahwa sebaiknya penderita diabetes tidak minum kopi, sementara sebagian lainnya ...",
  },
  {
    header:"Kesatu #1",
    body: "Mungkin Diabestfriends sering bertanya-tanya, bolehkah penderita diabetes minum kopi? Beberapa orang berpendapat bahwa sebaiknya penderita diabetes tidak minum kopi, sementara sebagian lainnya ...",
  },
  {
    header:"Kesatu #1",
    body: "Mungkin Diabestfriends sering bertanya-tanya, bolehkah penderita diabetes minum kopi? Beberapa orang berpendapat bahwa sebaiknya penderita diabetes tidak minum kopi, sementara sebagian lainnya ...",
  },
  {
    header:"Kesatu #1",
    body: "Mungkin Diabestfriends sering bertanya-tanya, bolehkah penderita diabetes minum kopi? Beberapa orang berpendapat bahwa sebaiknya penderita diabetes tidak minum kopi, sementara sebagian lainnya ...",
  },
  {
    header:"Kesatu #1",
    body: "Mungkin Diabestfriends sering bertanya-tanya, bolehkah penderita diabetes minum kopi? Beberapa orang berpendapat bahwa sebaiknya penderita diabetes tidak minum kopi, sementara sebagian lainnya ...",
  },
  {
    header:"Kesatu #1",
    body: "Mungkin Diabestfriends sering bertanya-tanya, bolehkah penderita diabetes minum kopi? Beberapa orang berpendapat bahwa sebaiknya penderita diabetes tidak minum kopi, sementara sebagian lainnya ...",
  },

]
export default function DetailKategori() {
    return (
        
    <div class='container'>      
      <h3 className="mb-3 text-center" style={{marginTop:'20px'}}> Kesehatan Mata</h3>
    <Col>
        <div><img src={eyes} alt='asd' class='img-detail'></img></div>
        
        <p class='style-p'>Tahukah Kamu apa saja yang mendukung kebiasaan gaya hidup sehat? Apakah hanya dari faktor makanan, minuman, atau olahraga? Ternyata banyak sekali faktor yang memengaruhi seseorang untuk menerapkan gaya hidup sehat. Salah satu yang sering terlupakan adalah membaca artikel kesehatan tentang gaya hidup sehat.
            Jika Kamu seorang atlet, tetapi tidak didukung oleh aktivitas lain seperti tidur cukup dan menerapkan pola makan sehat, sudah pasti tubuhmu akan cepat lelah dan tidak bugar. Namun rasanya, sebagai seorang atlet, Kamu tentu sudah tahu apa yang harus dilakukan untuk mendukung kesehatanmu. Hanya saja, Kamu mungkin melupakan pentingnya menambah pengetahuan untuk hidup lebih sehat, misalkan dengan membaca tips hidup sehat terbaru seperti yang sedang dijalankan oleh anak milenial saat ini.</p>
                
    </Col>
    <Card>
      <Card.Header>Faq</Card.Header>
      <Card.Body>
      {accordData.map((blg) => (
          <Col>
            <AccordionBasic
              header={blg.header}
              body={blg.body}
            />
          </Col>
        ))}
      </Card.Body>
    </Card>


    </div>
    )
}

