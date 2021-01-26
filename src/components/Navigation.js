import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
             <img src="../assets/img/Logo1.png" alt="" />
            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Destinations">Destinations</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/partner">Partner</Link></li>

                <li className="login">login</li>
                <li className="register">register</li>
            </ul>
        </nav>
    );
}

export default Navigation;