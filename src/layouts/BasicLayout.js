import React, { PureComponent } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './BasicLayout.less';

export default class BasicLayout extends PureComponent {
  render() {
    return (
      <div className='main'>
        <Header />
        {/*<div className='content'>*/}
          {/*{this.props.children}*/}
        {/*</div>*/}
        <Footer />
      </div>
    );
  }
}
