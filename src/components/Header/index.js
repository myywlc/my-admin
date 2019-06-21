import React, { PureComponent } from 'react';
import './index.less';

export default class Head extends PureComponent {
  componentDidMount() {

  }

  render() {
    return (
      <div className='head'>
        <div className='container'>
          <div className='head-menu'>
            阿里巴巴集团 Copyright ©1999-2019 版权所有
          </div>
        </div>
      </div>
    );
  }
}
