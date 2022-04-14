import "./Style-Rating.css"
export function Rating(props){
    function replace(){
        let rounds = Math.round(props.children)
        if (rounds === 0){
            rounds = "☆☆☆☆☆"
        } else if(rounds === 1){
            rounds = "★☆☆☆☆"
        } else if(rounds === 2){
            rounds = "★★☆☆☆"
        } else if(rounds === 3){
            rounds = "★★★☆☆"
        } else if(rounds === 4){
            rounds = "★★★★☆"
        } else if(rounds === 5){
            rounds = "★★★★★"
        } else {
            rounds = "Not Rated"
        }
        return rounds
    }


    return(
        <div>
            <h1 className="stars">{replace()}</h1>
        </div>
    )
}

