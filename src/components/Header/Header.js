import './Header.css';
import Nav from './Nav';
import Container from '../../Container/Container';

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <div className='header__nav'>
          <div className='header__logo'>
            <img style={{ width: '55px' }} src='/logo.png' alt='Logo'></img>
          </div>
          <Nav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
