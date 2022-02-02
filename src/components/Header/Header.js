import './Header.css';
import Nav from './Nav';
import Container from '../../Container/Container';

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <div className='header__nav'>
          <div className='header__logo'>
            <img
              style={{ width: '70px', heigth: '70px' }}
              src={require('../../img/cat.jpg')}
            ></img>
          </div>
          <Nav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
