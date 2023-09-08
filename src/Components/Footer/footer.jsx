import './footer.css';

function Footer() {
    return (
        <div className="h-10">
            <div className="footerDetailer gap-x-2 gap-y-3 text-l pt-2">
                <p className="paragraphPosition">Developed by:</p>
                <a href="https://github.com/Aamir269" className="text-blue-950 socialLink" target="_blank" rel="noopener noreferrer">Aamir Mushtaq</a>
                <a href="https://github.com/Vayre047" className="text-blue-950 socialLink" target="_blank" rel="noopener noreferrer">Tomás Borda de Água</a>
                <a href="https://github.com/Aamir269" target="_blank" className="text-blue-950 socialLink">Aamir Mushtaq</a>
                <a href="https://github.com/Vayre047" target="_blank" className="text-blue-950 socialLink">Tomás Borda de Água</a>
            </div>
        </div>
    );
}

export default Footer;
