import { Link } from "react-router-dom";
import './footer.css';

function Footer(){
    return(
        <div className="h-10">
            <div className="footerDetailer gap-x-2">
                <p className="paragraphPosition">Developed by:</p>
                <Link to="https://github.com/Aamir269" className="text-blue-950 socialLink">Aamir Mushtaq</Link>
                <Link to="https://github.com/Vayre047" className="text-blue-950 socialLink">Tomás Borda de Água</Link>
            </div>
        </div>
    );
}

export default Footer;