import { Card } from "react-bootstrap";
import "./home.css";
import pastel from "../../../img/pastel.png";

function Home() {
  return (
    <div className="home">
      <Card className="card">
        <h1 className="title">Bienvenido a Happy Cake</h1>
        <p className="subtitle">el lugar de los pasteles felices</p>
        <img className="img" src={pastel} alt="pastel" />
        <p className="text">Te estamos esperando</p>
      </Card>
    </div>
  );
}

export default Home;
