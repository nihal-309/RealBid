import '../styles/Header1.css'
function Header(){
    return(
        <div className="header">
            <div className="logo">LOGO</div>
            <div className="pages">
                <a href="#/">Help</a>
                <a href="#/">Contact</a>
                <a href="#/">About Us</a>
            </div>
        </div>
    )
}

export default Header;