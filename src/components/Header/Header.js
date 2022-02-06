import { useLocation } from 'react-router-dom';
import Container from '../../Container/Container';
import Nav from './Nav';
import SearchInput from '../UI/SearchInput';
import './Header.css';

const Header = () => {
  const currentLocation = useLocation().pathname;

  return (
    <header className='header'>
      <Container>
        <div className='header__nav'>
          <div className='header__logo'>
            <img
              style={{ width: '55px' }}
              src={require('../../img/logo.png')}
              alt='Logo'
            ></img>
          </div>
          <Nav />
          {currentLocation === '/catalog' && <SearchInput />}
        </div>
      </Container>
    </header>
  );
};

export default Header;
