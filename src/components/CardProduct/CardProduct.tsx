import classNames from 'classnames/bind';
import { CardProducts } from '~/types/global';
import Button from '../Button';
import styles from './CardProduct.module.scss';

const cx = classNames.bind(styles);

function CardProduct({ img, title, desc, price }: CardProducts) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('top-card')}>
        <img src={img} alt={img} className={cx('image')} />
      </div>
      <div className={cx('content')}>
        <h5 className={cx('title')}>{title}</h5>

        <p className={cx('desc')}>{desc}</p>

        <p className={cx('price')}>{price}</p>

        <Button className={cx('btn-buy')}>Buy</Button>
      </div>
    </div>
  );
}

export default CardProduct;
