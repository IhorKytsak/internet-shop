import IconFooter from './IconFooter';
import './Footer.css';
import Container from '../../Container/Container';

function Footer() {
  return (
    <footer className='footer'>
      <Container>
        <div className='footer-main'>
          <div className='footer-item'>
            <h5 className='contacts'>Our Contacts And Location</h5>
            <p className='adress'>Old Queen St, London SW1H 9HP,</p>
            <p className='adress'>
              Monday-Saturday 09:00-19:00. Sunday - Close.
            </p>
          </div>
          <div className='footer-item'>
            <img className='logoimg' src='/Logo.png'></img>
          </div>
          <div className='footer-icon footer-item'>
            <IconFooter />
          </div>
        </div>
        <div>
          <p className='last-line'>All rights not reserved. Ukraine ©2022.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
