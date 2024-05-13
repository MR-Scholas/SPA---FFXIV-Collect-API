import { Link } from "react-router-dom"

export default function Nav (props)
{
    return(
        <div className="nav">
            <Link to="/armoire">
                <div>Armoire</div>
            </Link>
            <Link to="/emotes">
                <div>Emotes</div>
            </Link>
            <Link to="/hairstyles">
                <div>Hairstyles</div>
            </Link>
        </div>
    )
}