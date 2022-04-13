import "./style-randomNum.css"
export function Random(props){
    let min = props.min;
    let max = props.max;
    let rand = Math.round(Math.random() * ((max - min) + min)) 
    return(
        <p className="text">Random value between {props.min} and {props.max} = {rand}</p>
    )
}