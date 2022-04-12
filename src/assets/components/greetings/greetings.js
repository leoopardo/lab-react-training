import "./style-greetings.css"

export function Greetings(props){
    let greet = ""
    
    if(props.lang === "de"){
        greet = "Hallo"
    } else if(props.lang === "en"){
        greet = "Hello"
    } else if(props.lang === "es"){
        greet = "Holla"
    } else if(props.lang === "fr"){
        greet = "Bonjour"
    };

    return (
        <div className="grt">
        <p>{greet}, {props.children}!</p>
        </div>
    )
}