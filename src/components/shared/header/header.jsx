import classNames from 'classnames/bind';
import React from 'react';

import styles from './header.module.scss';

const cx = classNames.bind(styles);
console.log(styles);
const Header = () => (
  <header className={cx('wrapper', 'wrapper-test')}>
    <div className="container">Header</div>
  </header>
);

export default Header;
