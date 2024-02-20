import {Link} from "react-router-dom";
function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3 text-uppercase" aria-label="First navbar example">
    <div className="container-fluid">
      <a className="navbar-brand text-uppercase" href="/">Supermarket</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample01">
        <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item">
                <Link className="nav-link" to="/">POS</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/orders">Orders</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/items">Items</Link>
            </li>
        </ul>
      </div>
    </div>
  </nav>
  
    )
}

export default Header