import classNames from 'classnames/bind';
import React from 'react';

import styles from './header.module.scss';

const cx = classNames.bind(styles);

const Header = () => (
  <header className={cx('wrapper')}>
    <div className="container">Header</div>
  </header>
);

export default Header;
