import "./Cards.css";
import { Card, CardHeader, CardBody, Image } from "@heroui/card";
const Cards = (props) => {
    return (
        <div className="cards">
            <Card className='cards-projeto py-4'>
                <h3 className="card-title">{props.name}</h3>
                <div className='lari-makeup'>
                    <img className="image-card" src={props.image} alt='cardflix' width={280}></img>
                </div>
                <div className="overlay">{props.description}</div>
                <a href="https://github.com/junio1k"><span style={{ fontSize: "20px" }}>{props.gitIcons}</span></a>
            </Card>
        </div>
    );
}

export default Cards;