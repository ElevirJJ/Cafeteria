import { Link } from 'react-router-dom';
import './Header.scss'
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div className='navegacao'>
      <div className="img">
        <img src={logo} alt="" />
      </div>
      <div className="link">
        <nav>
          <ul>
            <li> <Link to="/"> Home </Link></li>
            <li> <Link to="/Sobre"> Sobre </Link></li>
            <li> <Link to="/Local"> Local </Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
