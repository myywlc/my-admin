import React, { Component } from 'react';
import { Row, Col } from 'antd';
import urils from '../../utils/utils';
import axios from '../../axios';
import './index.less';

export default class Header extends Component {
  state = {
    userName: '',
    sysTime: 0,
    dayPictureUrl: '',
    weather: '',
  };

  componentDidMount() {
    this.setState({
      userName: 'lin',
    });
    setInterval(() => {
      let sysTime = urils.formatDate(new Date().getTime());
      this.setState({
        sysTime,
      });
    }, 1000);

    this.getWeatherApiData();
  }

  getWeatherApiData = () => {
    let city = '杭州';
    axios.jsonp({
      url: 'http://api.map.baidu.com/telematics/v3/weather?location='
        + encodeURIComponent(city) + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2',
    }).then((res) => {
      if (res.status === 'success') {
        let data = res.results[0].weather_data[0];
        this.setState({
          dayPictureUrl: data.dayPictureUrl,
          weather: data.weather,
        });
      }
    });
  };

  render() {
    const { userName, sysTime, dayPictureUrl, weather } = this.state;

    return (
      <div className={'header'}>
        <Row className={'header-top'}>
          <Col span={24}>
            <span>hello, {userName}</span>
            <div>退出</div>
          </Col>
        </Row>
        <Row className={'breadcrumb'}>
          <Col span={4} className={'breadcrumb-title'}>
            首页
          </Col>
          <Col span={20} className={'weather'}>
            <span className={'date'}>{sysTime}</span>
            <span className={'weather-img'}>
              <img src={dayPictureUrl} alt="" />
            </span>
            <span className={'weather-detail'}>
              {weather}
            </span>
          </Col>
        </Row>
      </div>
    );
  }
}
