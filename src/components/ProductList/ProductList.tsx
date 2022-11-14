import { Row } from 'antd';
import Col from 'antd/es/grid/col';
import classNames from 'classnames/bind';
import { CardProducts } from '~/types/global';
import CardProduct from '../CardProduct';
import styles from './ProductList.module.scss';

const cx = classNames.bind(styles);

const CARD_PRODUCT_LIST: CardProducts[] = [
  {
    img: 'https://picsum.photos/150',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quasi accusantium ducimus quia animi ea ipsam quibusdam voluptates praesentium laboriosam, cumque, obcaecati, minima voluptas. Explicabo quae voluptatibus recusandae neque id?',
    price: '20.000 VNĐ',
    title: 'Product 1',
  },
  {
    img: 'https://picsum.photos/150',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quasi accusantium ducimus quia animi ea ipsam quibusdam voluptates praesentium laboriosam, cumque, obcaecati, minima voluptas. Explicabo quae voluptatibus recusandae neque id?',
    price: '30.000 VNĐ',
    title: 'Product 2',
  },
  {
    img: 'https://picsum.photos/150',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quasi accusantium ducimus quia animi ea ipsam quibusdam voluptates praesentium laboriosam, cumque, obcaecati, minima voluptas. Explicabo quae voluptatibus recusandae neque id?',
    price: '12.000 VNĐ',
    title: 'Product 3',
  },
];

function ProductList() {
  return (
    <div className={cx('wrapper')}>
      <Row gutter={[32, 32]}>
        {CARD_PRODUCT_LIST.map((card, index) => {
          return (
            <Col span={24} lg={{ span: 8 }}>
              <CardProduct key={index} img={card.img} title={card.title} desc={card.desc} price={card.price}></CardProduct>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default ProductList;
