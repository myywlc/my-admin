import React from 'react';
import './index.less';

class JobBar extends React.Component {
  state = {
    location: 0,
  };

  componentDidMount() {
    this.roll();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  roll = () => {
    let { location } = this.state;
    const { dataList = [] } = this.props;
    const len = -(dataList.length - 5) * 50;

    this.timer && clearInterval(this.timer);
    this.timer = setInterval(() => {
      location -= 1;
      if (location === len) {
        location = 0;
      }
      this.setState({
        location,
      });
    }, 60);
  };

  handleMouseEnter = () => {
    clearInterval(this.timer);
  };

  handleMouseLeave = () => {
    this.roll();
  };

  handleClickMore = () => {
    window.location.href = 'https://job.alibaba.com/zhaopin/positionList.html?';
  };

  render() {
    const { location } = this.state;
    const { dataList = [] } = this.props;
    const styleTop = {
      top: location,
    };

    return (
      <div className='job-con'>
        <div className='job-header'>
          <span className='job-new'>最新职位</span>
          <span className='job-more' onClick={this.handleClickMore}>更多</span>
        </div>
        <ul className='job-space' style={styleTop}>
          {
            dataList.map(item => (
              <li className='job-item' key={item.id}
                  onMouseEnter={this.handleMouseEnter}
                  onMouseLeave={this.handleMouseLeave}>
                <a href={item.link} className='jobName'>{item.jobName}</a>
                <span className='site'>{item.site}</span>
                <span className='time'>{item.time}</span>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default JobBar;
