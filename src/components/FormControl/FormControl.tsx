import classNames from 'classnames/bind';
import { FormControls } from '~/types/global';
import styles from './FormControl.module.scss';

const cx = classNames.bind(styles);

function FormControl({ id, placeholder, type, label }: FormControls) {
  return (
    <div className={cx('wrapper')}>
      <label htmlFor={id} className={cx('label')}>
        {label}
      </label>
      <input id={id} type={type} className={cx('input')} placeholder={placeholder} />
    </div>
  );
}

export default FormControl;
