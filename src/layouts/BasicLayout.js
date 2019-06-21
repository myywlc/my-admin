import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './BasicLayout.less';

export default class BasicLayout extends PureComponent {
  render() {
    return (
      <div className='main'>
        <Header />
        <Row className='content'>
          {this.props.children}
        </Row>
        <Footer />
      </div>
    );
  }
}
