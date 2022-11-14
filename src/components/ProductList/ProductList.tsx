import { Row } from 'antd';
import Col from 'antd/es/grid/col';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux/es/exports';
import { RootState } from '~/redux/store';
import CardProduct from '../CardProduct';
import styles from './ProductList.module.scss';

const cx = classNames.bind(styles);

function ProductList() {
  const dataCard = useSelector((state: RootState) => state.saves);

  return (
    <div className={cx('wrapper')}>
      <Row gutter={[32, 32]}>
        {dataCard.map((card, index) => {
          return (
            <Col key={index} span={24} lg={{ span: 8 }}>
              <CardProduct img={card.img} title={card.title} desc={card.desc} price={card.price}></CardProduct>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default ProductList;
