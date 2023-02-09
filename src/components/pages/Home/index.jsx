// import components
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

// import image
import homeImg from "../../../assets/img/Launching-pana.svg";

//import css
import "./style.css";

function Home() {
  return (
    <>
      <Navbar />
      <main className="main_content">
        <h1>
          Bem-Vindo ao <span>O_Coisa</span>
        </h1>
        <p>Tornamos a gestão de seus ativos de hardware simples e eficaz.</p>
        <img src={homeImg} alt="Imagem principal" />
      </main>
      <Footer />
    </>
  );
}

export default Home;
