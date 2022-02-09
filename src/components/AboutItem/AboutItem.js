import { Link, useParams } from 'react-router-dom';
import Container from '../../Container/Container';
import MyButton from '../UI/MyButton';
import styles from './AboutItem.module.css';
import { CATALOG_ITEMS } from '../Catalog/MyCatalogItems';

const AboutItem = () => {
  const { name } = useParams();
  const showItemPage = CATALOG_ITEMS.filter((item) => item.name === name);
  const currentItem = showItemPage['0'];

  return (
    <Container>
      <div className={styles.aboutHeading}>
        <div className={styles.aboutHeading__left}>
          <img src={currentItem.img} alt='about img'></img>
        </div>
        <div className={styles.aboutHeading__right}>
          <div className={styles.aboutHeading__chars}>
            <div className={styles.aboutHeading__char1}>1 year warranty </div>
            <div className={styles.aboutHeading__char2}>Free shipping </div>
          </div>
          <h2>{currentItem.name}</h2>
          <p>{currentItem.about}</p>
          <form className={styles.aboutHeading__form}>
            <input
              type='number'
              min='1'
              step='1'
              placeholder='Specify the number '
            />
            <select>
              <option value='' hidden>
                Сhoose a color
              </option>
              <option value='white'>White</option>
              <option value='black'>Black</option>
            </select>
          </form>
        </div>
      </div>
      <div className={styles.aboutHeading__footer}>
        <div className={styles.aboutHeading__price}>
          Price: {currentItem.price}
        </div>
        <div className={styles.aboutHeading__buttons}>
          <Link to='/catalog'>
            <MyButton className={styles.aboutHeading__btnBack}>
              Go back
            </MyButton>
          </Link>
          <Link to='/cart'>
            <MyButton className={styles.aboutHeading__btnAdd}>
              Add to cart
            </MyButton>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default AboutItem;
