// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="nav-content">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="website-logo"
    />
    <div className="nav-menu-con">
      <ul className="nav-menu">
        <Link to="/" className="nav-link">
          <li>Home</li>
        </Link>
        <Link to="/" className="nav-link">
          <li>Products</li>
        </Link>
        <Link to="/" className="nav-link">
          <li>Cart</li>
        </Link>
      </ul>
      <button className="logout-desktop-btn" type="button">
        Logout
      </button>
    </div>
  </div>
)

export default Header
