import React, { PureComponent } from 'react';
import './index.less';

export default class Head extends PureComponent {
  state = {
    active: 0,
  };

  handleClickActive = key => {
    this.setState({
      active: key,
    });
  };

  render() {
    const { active } = this.state;
    return (
      <div className='head'>
        <div className='container'>
          <div className='head-menu'>
            <a href='#/zhaopin/index' className='logo'><img
              src={'https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png'} alt='阿里巴巴社招' height={20} /></a>
            <i className='separator' />
            <span className='web-name'>社招官网</span>
            <ul className='menu'>
              <li><a onClick={() => this.handleClickActive(0)} href='#/zhaopin/index'
                     className={active === 0 ? 'menu-item active' : 'menu-item'}>首<span
                className='fill' />页</a></li>
              <li><a onClick={() => this.handleClickActive(1)} href='#/zhaopin/index'
                     className={active === 1 ? 'menu-item active' : 'menu-item'}>社会招聘</a></li>
              <li><a onClick={() => this.handleClickActive(2)} href='#/zhaopin/index'
                     className={active === 2 ? 'menu-item active' : 'menu-item'}>校园招聘</a></li>
              <li><a onClick={() => this.handleClickActive(3)} href='#/zhaopin/index'
                     className={active === 3 ? 'menu-item active' : 'menu-item'}>了解阿里</a></li>
              <li><a onClick={() => this.handleClickActive(4)} href='#/zhaopin/index'
                     className={active === 4 ? 'menu-item active' : 'menu-item'}>个人中心</a></li>
            </ul>
            <span className='welcomeInfo'>欢迎来到阿里巴巴集团招聘！</span>
            <a href='#/zhaopin/index' className='login'>登录</a>
            <i className='small-separator' />
            <a href='#/zhaopin/index' className='register'>注册</a>
          </div>
        </div>
      </div>
    );
  }
}
