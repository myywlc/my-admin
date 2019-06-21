import React, { PureComponent } from 'react';
import './index.less';

export default class Footer extends PureComponent {
  render() {
    return (
      <div className='footer'>
        <div className='container'>
          <div className='footer-menu'>
            阿里巴巴集团 Copyright ©1999-2019 版权所有
          </div>
        </div>
      </div>
    );
  }
}
