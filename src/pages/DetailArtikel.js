import React from 'react'
import {
  Card,
  Col,
} from "react-bootstrap";
import mata from "../assets/images/bayik.jpeg";
import AccordionBasic from '../components/Accordion';
import Header from '../components/Header';


const accordData = [
  {
    id:"collapseOne",
    target:"#collapseOne",
    label:"headingOne",
    header:"Apa Penyebab Bayi Ileran ?",
    body: "Yang pertama adalah terjadinya aktivasi air liur bayi pada saat berumur 3 bulan. Dikarenakan pada usia ini, bayi telah mulai belajar mengunyah dengan cara memasukkan tangannya ke mulut. Sehingga, terjadi proses produksi air liur.   Ketika gigi mulai tumbuh untuk pertama kalinya, keadaan ini otomatis berdampak pada berlebihnya produksi air liur. Pertumbuhan gigi ini juga akan disertai oleh rasa nyeri. Akibatnya, bayi akan lebih rewel serta mengalami susah tidur.    ",
  },
  {
    id:"collapseTwo",
    target:"#collapseTwo",
    label:"headingTwo",
    header:"Normalkah Bayi Banyak Mengeluarkan Air Liur ?    ",
    body: "Kelenjar liur pada bayi sebenarnya sudah aktif sejak ia masih berada di dalam rahim. Namun, kerja kelenjar air liur akan sangat aktif pada beberapa bulan pertama. Pada usia ini, bayi belum bisa menelan semua air liur yang diproduksi. Akibatnya, ia akan lebih banyak mengeluarkan air liur.    ",
  },
  {
    id:"collapseThree",
    target:"#collapseThree",
    label:"headingThree",
    header:"Bagaimana jika bayi mengeluarkan air liur berlebihan? ",
    body: "Ketika mulai berusia 2–6 bulan, bayi akan lebih sering mengeluarkan air liur. Walaupun penyebabnya belum diketahui secara pasti, banyaknya air liur yang diproduksi bayi bisa jadi merupakan suatu bentuk perlindungan diri. Pada usia ini, bayi mulai sering mengeksplorasi benda di sekitarnya, bahkan memasukkan segala benda yang ia pegang ke dalam mulutnya. Protein yang ada di dalam air liur dapat melindunginya dari kuman atau kotoran yang mungkin ada pada benda-benda tersebut.",
  },
  {
    id:"collapseFour",
    target:"#collapseFour",
    label:"headingFour",
    header:"Apa Tips Menangani Air Liur Berlebihan pada Bayi ?",
    body: "Agar kulit Si Kecil terhindar dari ruam yang diakibatkan oleh air liur berlebihan, Bunda harus membiasakan diri untuk rajin mengelap setiap bayi mengeluarkan air liur, ya. Bila air liur terlihat terus mengalir karena ada gigi yang tumbuh, Bunda bisa mencoba memberi sesuatu yang dingin, seperti mainan gigit atau lap basah yang sudah didinginkan, pada area gusi Si Kecil untuk membantu mengurangi nyeri yang dirasakannya. Jangan lupa untuk mengeringkan kembali mulut Si Kecil sesudahnya",
  }

]
export default function DetailArtikel() {
    return (
      <>
      <Header></Header>
        
    <div class='container'>      
      <h3 className="mb-3 text-center" class='artikel-title'> Ngidam Enggak Dituruti Bikin Anak Sering Ngeces, Mitos atau Fakta?</h3>
      <h6 class='style-p'>Posted On: 10 November 2020 </h6>
      <h6 class='style-p'>Posted By: Hermina Galaxy Reviewed By: dr. Devy Trianti Galangi, SpM</h6>
    <Col>
        <div><img src={mata} alt='asd' class='img-detail'></img></div>
        <p class='font-p'>Mums pasti sering dengar deh mitos yang bilang kalau ngidam Mums selama hamil enggak dituruti, maka waktu si Kecil lahir, ia akan sering ngeces atau ileran.Wah, kira-kira benar enggak sih mitos yang satu ini?</p>
        <h3>Ngidam Enggak Dituruti Bikin Anak Sering Ngeces?</h3>
        <p class='font-p'>Ternyata, itu semua hanya mitos, Mums! Tidak ada hubungan antara ngidam yang tidak terpenuhi dengan bayi yang suka ngeces. Keluarnya air liur atau ngeces adalah kondisi yang sangat umum dan normal terjadi pada bayi. Jadi Mums tidak perlu terlalu mengkhawatirkan kondisi ini.</p>
        <p class='font-p'>Biasanya, bayi mengeluarkan air liur saat usianya memasuki 3 bulan. Beberapa bayi ada yang hanya mengeluarkan sedikit liur, sementara ada pula yang mengeluarkan liur lebih banyak. </p>
        <h3>Apakah Ngeces Berperan Penting dalam Proses Tumbuh Kembang Bayi?</h3>
        <p class='font-p'>Tentu saja. Ngeces bisa menjadi tanda akan adanya tahapan baru yang dicapai bayi dalam proses tumbuh kembangnya, misalnya ketika ia sedang tumbuh gigi.Saat bayi mengeluarkan liur setelah ia mencium bau susu atau masakan, ini menandakan bahwa indera penciumannya sedang berkembang. Selain itu, air liur juga mengandung enzim yang berguna bagi bayi untuk mencerna makanan semi padat atau padat ketika ia berusia 4 hingga 6 bulan. Air liur ini akan menetralkan asam lambung, membantu mematangkan lapisan usus bayi, dan melindungi lapisan kerongkongan dari iritasi. Air liur juga membantu mengikat makanan karena sifatnya yang licin, sehingga memudahkan bayi saat menelan.</p>
    </Col>
    <Card>
      <Card.Header><h3>Faq</h3></Card.Header>
      <Card.Body>
      {accordData.map((blg) => (
          <Col>
            <AccordionBasic
              id={blg.id}
              label={blg.label}
              target={blg.target}
              header={blg.header}
              body={blg.body}
            />
          </Col>
        ))}
      </Card.Body>
    </Card>


    </div>
    </>
    )
}

