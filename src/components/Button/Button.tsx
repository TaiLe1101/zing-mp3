import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

type ButtonProps = {
  children: string;
  primary?: boolean;
  outLine?: boolean;
  disable?: boolean;
  className?: string;
  onClick?: any;
};

function Button({ children, primary = true, outLine = false, disable = false, className = '', onClick }: ButtonProps) {
  return (
    <div className={cx('wrapper')}>
      <button
        className={cx('btn', {
          [className]: className,
        })}
        onClick={onClick}
        disabled={disable}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
