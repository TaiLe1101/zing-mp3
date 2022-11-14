import classNames from 'classnames/bind';
import ProductList from '../ProductList';
import styles from './FormBuyProduct.module.scss';

const cx = classNames.bind(styles);

function FormBuyProduct() {
  return (
    <div className={cx('wrapper')}>
      <ProductList></ProductList>
    </div>
  );
}

export default FormBuyProduct;
