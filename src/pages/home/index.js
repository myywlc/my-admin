import React, { Component } from 'react';
import styles from './index.module.less';

const data = [
  {
    label: 'debugId',
    value: 123456,
  },
  {
    label: 'debug',
    value: 123456,
  },
  {
    label: 'lin',
    value: 123456,
  },
  {
    label: 'bugId',
    value: 123456,
  },
  {
    label: 'Id',
    value: 123456,
  },
  {
    label: 'Id',
    value: 123456,
  },
];

export default class Home extends Component {

  render() {
    return (
      <div className={styles['home-wrap']}>
        <div className={styles['box']}>
          <div className={styles['title']}>
            <span>Debug</span>
          </div>

          <div className={styles.content}>
            {
              data.map((item, index) => {
                return (
                  <div className={styles.item} key={index}>
                    <span>{item.label} : </span>
                    <span className={styles.key}>{item.value}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
