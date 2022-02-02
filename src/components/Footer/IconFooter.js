import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';

function IconFooter() {
  return (
    <div className='icons'>
      <AiFillFacebook
        style={{ marginLeft: '30px', fontSize: '40px', borderRadius: '30px' }}
      />

      <AiFillInstagram
        style={{ marginLeft: '30px', fontSize: '40px', borderRadius: '30px' }}
      />

      <AiFillLinkedin
        style={{ marginLeft: '30px', fontSize: '40px', borderRadius: '30px' }}
      />

      <AiFillTwitterSquare
        style={{ marginLeft: '30px', fontSize: '40px', borderRadius: '30px' }}
      />
    </div>
  );
}

export default IconFooter;
