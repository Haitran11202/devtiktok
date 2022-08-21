import Button from '~/components/Button';

import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function MenuItem({ data }) {
  return (
    <Button className={cx('menu-item')} to={data.to} leftIcon={data.icon}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
