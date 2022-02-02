import IconFooter from './IconFooter';
import './Footer.css';
import Container from '../../Container/Container';

function Footer() {
  return (
    <Container>
      <hr className='first-hr'></hr>
      <div className='footer-main'>
        <div>
          <h5 className='contacts'>Our Contacts And Location</h5>
          <p className='adress'>Old Queen St, London SW1H 9HP,</p>
          <p className='adress'>Monday-Saturday 09:00-19:00. Sunday - Close.</p>
        </div>
        <div>
          <img className='logoimg' src='/Logo.png'></img>
        </div>
        <div>
          <IconFooter />
        </div>
      </div>
      <div>
        <hr></hr>
        <p className='last-line'>All rights not reserved. Ukraine ©2022.</p>
      </div>
    </Container>
  );
}

export default Footer;
