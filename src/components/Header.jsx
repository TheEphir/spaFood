import { Link } from 'react-router-dom';

export function Header() {
  return (
    <nav>
      <div className='nav-wrapper blue lighten-2'>
        <Link to='/' className='brand-logo center black-text'>
          ShopProject
        </Link>
        <ul className='left hide-on-med-and-down'>
          <li>
            <Link to='/About'>About</Link>
          </li>
          <li>
            <Link to='/Contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
