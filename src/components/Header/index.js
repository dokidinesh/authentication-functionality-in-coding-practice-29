// Write your JS code here
import {Link} from 'react-router-dom'

const Header = () => (
  <nav>
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
    </ul>
  </nav>
)

export default Header
