

export default function InfoCard (props)
{
    return(
        <div className="infoCard">
            <div className="cardHeader">
            <img className ="icon" src={props.icon}/>
            <h2>{props.name}</h2>    
            </div>
            <div>Added: {props.patch}</div>
            <div>Owned: {props.owned}</div>
        </div>
    )
}