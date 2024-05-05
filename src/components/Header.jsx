import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <div className="container">
                    <span className="navbar-brand mb-0 h1">
                        <Link to='/' className="fip-logo">Meu Blog da FIAP</Link>
                    </span>
                </div>
            </div>
        </nav >
    )
}