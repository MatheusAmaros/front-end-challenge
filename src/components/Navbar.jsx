import homeIcon from '../assets/homeIcon.png';
import '../styles/Navbar.scss';

import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    return(
        <nav>
            <img src={homeIcon} alt="home" onClick={() => navigate("/")} />

        </nav>
    );
}