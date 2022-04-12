import "./style-idCard.css"
export function IdCard(props){
    return (
        <div className="tagCard">
            <div className="photo-div">
                <img className="photo" src={props.picture} alt={props.firstName} />
            </div>
            <div className="info">
                <p><strong>Last name:</strong> {props.lastName};</p>
                <p><strong>First name:</strong> {props.firstName};</p>
                <p><strong>Gender:</strong> {props.gender};</p>
                <p><strong>Height:</strong> {props.height};</p>
                <p><strong>Birth:</strong> {props.birth.toDateString()}.</p>
            </div>
        </div>
    )
}