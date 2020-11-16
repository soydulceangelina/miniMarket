import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainContainer.module.scss';

export const MainContainer = (props) => {
  const { children } = props;
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {children}
      </div>
    </div>
  );
};

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
