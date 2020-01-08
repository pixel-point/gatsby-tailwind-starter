
import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/shared/header';
import styles from './layout-main.module.scss';


const LayoutMain = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

LayoutMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutMain;
