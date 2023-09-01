import { Link } from "react-router-dom";
import './footer.css';

function Footer(){
    return(
        <div>
            <div className="footerDetailer">
                <p>Made by:</p>
                <Link to="https://github.com/Aamir269">Aamir Mushtaq</Link>
                <Link to="https://github.com/Vayre047">Tomás Borda de Água</Link>
            </div>
        </div>
    );
}

export default Footer;