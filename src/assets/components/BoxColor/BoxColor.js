import "./Style-BoxColor.css"

export function BoxColor(props){
    let color = `rgb(${props.r},${props.g},${props.b})`
    let divStyle = {
        backgroundColor: color
    }
    return(
      <div className="clr" style={divStyle}>{color}</div>
    )
}