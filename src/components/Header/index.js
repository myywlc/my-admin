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
            <a href='#/zhaopin/index' className='logo'><img
              src={'https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png'} alt='阿里巴巴社招' height={20} /></a>
            <i className='separator' />
            <span className='web-name'>社招官网</span>
            <ul className='menu'>
              <li><a href='#/zhaopin/index' className='menu-item active'>首<span className='fill' />页</a></li>
              <li><a href='#/zhaopin/index' className='menu-item'>社会招聘</a></li>
              <li><a href='#/zhaopin/index' className='menu-item'>校园招聘</a></li>
              <li><a href='#/zhaopin/index' className='menu-item'>了解阿里</a></li>
              <li><a href='#/zhaopin/index' className='menu-item'>个人中心</a></li>
            </ul>
            <span className='welcomeInfo'>欢迎来到阿里巴巴集团招聘！</span>
            <a href='#/zhaopin/index' className='login'>登录</a>
            <i className='small-separator'/>
            <a href='#/zhaopin/index' className='register'>注册</a>
          </div>
        </div>
      </div>
    );
  }
}
