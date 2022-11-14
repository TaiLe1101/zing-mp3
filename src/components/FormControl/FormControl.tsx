import classNames from 'classnames/bind';
import { FormControls } from '~/types/global';
import styles from './FormControl.module.scss';

const cx = classNames.bind(styles);

function FormControl({ id, placeholder, type, label, value, onChange }: FormControls) {
  return (
    <div className={cx('wrapper')}>
      <label htmlFor={id} className={cx('label')}>
        {label}
      </label>
      <input value={value} id={id} type={type} className={cx('input')} placeholder={placeholder} onChange={onChange} />
    </div>
  );
}

export default FormControl;
