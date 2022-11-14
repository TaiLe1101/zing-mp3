import Col from 'antd/lib/col';
import { Row } from 'antd/lib/grid';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import FormControl from '~/components/FormControl';
import ProductList from '~/components/ProductList';
import { FormControls } from '~/types/global';
import styles from './TodoApp.module.scss';

const cx = classNames.bind(styles);

const FORM_CONTROL_LIST: FormControls[] = [
  {
    id: 'name',
    type: 'text',
    label: 'Name Product',
    placeholder: 'Input Name Product...',
  },
  {
    id: 'desc',
    type: 'text',
    label: 'Desc Product',
    placeholder: 'Input Desc Product...',
  },
  {
    id: 'price',
    type: 'text',
    label: 'Price Product',
    placeholder: 'Input Price Product...',
  },
];

function TodoApp() {
  return (
    <div className={cx('wrapper')}>
      <div className="container">
        <Row gutter={[32, 32]}>
          <Col span={24} lg={{ span: 12 }}>
            <div className={cx('form')}>
              {FORM_CONTROL_LIST.map((formControl) => {
                return (
                  <FormControl
                    id={formControl.id}
                    label={formControl.label}
                    type={formControl.type}
                    placeholder={formControl.placeholder}
                  ></FormControl>
                );
              })}
              <Button> Save</Button>
            </div>
          </Col>
          <Col span={24} lg={{ span: 12 }}>
            <div className={cx('list-product')}>
              <ProductList></ProductList>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default TodoApp;
