import { Rating } from "../Rating/Rating";
import "./driver.css"

export function DriverCard(props) {
    return (
        <div className="driverCard">
            <img src={props.img} className="driverPhoto" alt={props.name}/>
            <div className="driverText">
                <h3>{props.name}</h3>
                <p>{<Rating>{props.rating}</Rating>}</p>
                <p>{props.car.model} {props.car.licensePlate}</p>
            </div>
        </div>
     );
}