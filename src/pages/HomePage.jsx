import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6" className="pt-lg-0 pt-5">
              <h1 className="mb-4">
                Ikuzooo <br /> <span>Cari tahu Waifumu</span> <br /> bersama
                kami{" "}
              </h1>
              <p className="mb-4">
                Menjadi wibu tidaklah sesulit itu mendapatkan kemenangan dan
                kenyamanan terhadap para waifu diluar sana kan enak
              </p>
              <button className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2">
                Lihat Waifu
              </button>
              <button className="btn btn-outline-danger btn-lg rounded-1 mb-xs-0 mb-2">
                Lihat Anime
              </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={HeroImage} alt="hero-image" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100"></div>
    </div>
  );
};

export default HomePage;
