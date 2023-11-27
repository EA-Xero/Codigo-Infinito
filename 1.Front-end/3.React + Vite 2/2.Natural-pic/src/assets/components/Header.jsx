import { Link } from "react-router-dom"
export default function Header() {
    return (
        <div>
            <div className="header bg-success bg-gradient d-flex justify-content-center">
                <Link to="/" className="text-white pt-3 h3">Home/ </Link>
                <Link to="/Favoritos" className="text-white pt-3 pb-3 h3"> Favoritos</Link>
            </div>
            <h1 className="h1 text-success d-flex justify-content-center mt-4">Natural Pic</h1>
        </div>
    )
}