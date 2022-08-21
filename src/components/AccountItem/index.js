import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '~/assets/images';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/7a980b2c6c9d22e228a421262f184736~c5_100x100.jpeg?x-expires=1660528800&x-signature=G0PQ8V7PJU8K6TvMk7Nu2nlPBpU%3D"
        alt="Hoa"
      />
      <div className={cx('infor')}>
        <h4 className={cx('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
