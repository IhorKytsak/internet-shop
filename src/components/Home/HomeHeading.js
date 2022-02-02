import './HomeHeading.css';

const HomeHeading = ({ title, text }) => {
  return (
    <div className='homeHeading'>
      <div className='homeHeading__left'>
        <img src={require('../../img/heading-img.jpg')}></img>
      </div>
      <div className='homeHeading__right'>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HomeHeading;
