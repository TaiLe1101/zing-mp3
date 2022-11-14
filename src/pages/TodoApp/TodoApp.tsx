import Col from 'antd/lib/col';
import { Row } from 'antd/lib/grid';
import classNames from 'classnames/bind';
import FormBuyProduct from '~/components/FormBuyProduct';
import FormSaveProduct from '~/components/FormSaveProduct';
import styles from './TodoApp.module.scss';

const cx = classNames.bind(styles);

function TodoApp() {
  return (
    <div className={cx('wrapper')}>
      <div className="container">
        <Row gutter={[32, 32]}>
          <Col span={24} lg={{ span: 12 }}>
            <FormSaveProduct></FormSaveProduct>
          </Col>
          <Col span={24} lg={{ span: 12 }}>
            <FormBuyProduct></FormBuyProduct>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default TodoApp;
