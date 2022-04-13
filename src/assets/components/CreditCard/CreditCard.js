import Visa from "../../images/visa.png"
import MasterCard from "../../images/master-card.svg"
import "./Style-CreditCard.css"

export function CreditCard(props){
    // IMAGEM DO BANCO
    let bankImg = 0
    if(props.type === "Visa"){
        bankImg = Visa
    } else if(props.type === "Master Card"){
        bankImg = MasterCard
    };
    // OCULTAR PRIMEIROS DIGITOS
    let hidedNum = props.number.substring(0, 12); 
    let replaced = props.number.replace(hidedNum, "************");
    // COR DO CARTAO
    let clrLetter = '';
    if(props.color === "white"){
        clrLetter = "black"  
    } else {
        clrLetter = "white"
    }
    let styleDiv = {
        backgroundColor: props.color,
        color: clrLetter
    }
    
    return(
        <div className="card" style={styleDiv}>
            <img className="bankLogo" src= {bankImg} alt="bankImage" />
            <p className="numbCard">{`${replaced.substring(0, 4)} ${replaced.substring(4, 8)} ${replaced.substring(8, 12)}
            ${replaced.substring(12, 16)}`}</p>
            <p className="letr">Expires {props.expirationMonth}/{props.expirationYear} {props.bank}</p>
            <p className="letr">{props.owner}</p>
        </div>
    )
}