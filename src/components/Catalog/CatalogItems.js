import Container from '../../Container/Container';
import CatalogItem from './CatalogItem';
import './CatalogItems.css';

const CATALOG_ITEMS = [
  {
    img: require('../../img/catalog/apple-iphone-11.jpg'),
    name: 'Apple iPhone 11',
    about:
      'Announced: 2019, September. Fast battery charging 18W: 50% in 30 minUSB Power Delivery 2.0Qi wireless charging. OS: iOS 13, upgradable to iOS 13.1 . Internal: 128 GB, 4 GB RAM',
    price: '623.00 €'
  },
  {
    img: require('../../img/catalog/apple-iphone-12-pro-5g.jpg'),
    name: 'Apple iPhone 12 Pro 5Ge',
    about:
      'Released 2020, October 23. Fast charging 20W, 50% in 30 min (advertised)USB Power Delivery 2.0Qi fast wireless charging 15W. OS: iOS 14.1. Internal: 256 GB, 6 GB RAM',
    price: '1067.00 €'
  },
  {
    img: require('../../img/catalog/apple-iphone-13-5g.jpg'),
    name: 'Apple iPhone 13 5G',
    about:
      'Announced: 2021, September 14. Fast charging 20W, 50% in 30 min (advertised), USB Power Delivery 2.0, MagSafe wireless charging 15W, Qi magnetic fast wireless charging 7.5W . OS: iOS 15 . Internal: 128 GB, 4 GB RAM',
    price: '817.00 €'
  },
  {
    img: require('../../img/catalog/samsung-galaxy-a12.jpg'),
    name: 'Samsung Galaxy A12',
    about:
      ' Released 2021, August 09. Fast charging 15W. OS: Android 11, One UI 3.1. Internal: 128 GB, 4 GB RAM',
    price: '209.00 €'
  },
  {
    img: require('../../img/catalog/samsung-galaxy-s21-5g.jpg'),
    name: 'Samsung Galaxy S21 5G ',
    about:
      'Released 2021. Fast charging 25W, USB Power Delivery 3.0, Fast Qi/PMA wireless charging 15W, Reverse wireless charging 4.5W. OS: Android 11, One UI 3.1. Internal: 256 GB , 8 GB RAM',
    price: '721.00 €'
  },
  {
    img: require('../../img/catalog/xiaomi-poco-f3-5g.jpg'),
    name: 'Xiaomi Poco F3 5G name',
    about:
      'Released 2021, March 27. Fast charging 33W, 100% in 52 min (advertised), Power Delivery 3.0, Quick Charge 3+. OS: Android 11, MIUI 12 for POCO. Internal: 256 GB , 8 GB RAM',
    price: '374.00 €'
  },
  {
    img: require('../../img/catalog/xiaomi-11-lite-5g.jpg'),
    name: 'Xiaomi 11 Lite 5G',
    about:
      'Released 2021, October 02. Fast charging 33W Li-Po 4250 mAh, non-removable. OS: Android 11, MIUI 12.5. Internal: 128 GB, 6 GB RAM',
    price: '318.00 €'
  },
  {
    img: require('../../img/catalog/blackview-a100.jpg'),
    name: 'Blackview A100',
    about:
      'Released 2021 . OS: Android 11. Non-removable Li-Po 4680 mAh battery Internal: 128 GB, 44GB RAM',
    price: '182.00 €'
  }
];

const CatalogItems = () => {
  return (
    <Container>
      <div className='catalogItems'>
        {CATALOG_ITEMS.map((item) => (
          <CatalogItem
            key={item.name}
            img={item.img}
            name={item.name}
            about={item.about}
            price={item.price}
          />
        ))}
      </div>
    </Container>
  );
};

export default CatalogItems;
