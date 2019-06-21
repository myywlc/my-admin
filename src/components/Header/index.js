import React, { PureComponent } from 'react';
import './index.less';

export default class Head extends PureComponent {
  state = {};

  componentDidMount() {

  }

  render() {
    return (
      <div className='head'>
        <div className='container'>
          <div className='head-menu'>
            <a href="#"><img className='logo' src={'https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png'} height={20}/></a>
            <span className='line'>|</span>
            <span className='text'>社招官网</span>
            {/*<div span={12} className='header_items'>*/}
              {/*<a href='#' className='header_item active'>首页</a>*/}
              {/*<a href='#' className='header_item'>社会招聘</a>*/}
              {/*<a href='#' className='header_item'>校园招聘</a>*/}
              {/*<a href='#' className='header_item'>了解阿里</a>*/}
              {/*<a href='#' className='header_item'>个人中心</a>*/}
            {/*</div>*/}
            {/*<div span={6} className='login_box'>*/}
              {/*<span className='welcome'>欢迎来到阿里巴巴集团招聘！</span>*/}
              {/*<a href='#/login' className='login'>登录</a>*/}
              {/*<span className='login_line'> | </span>*/}
              {/*<a href='#/login' className='register'>注册</a>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    );
  }
}
