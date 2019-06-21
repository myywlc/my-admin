import React from 'react';
import './index.less';

class JobBar extends React.Component {
  state = {
    top: 0,
  };

  componentDidMount() {
    this.roll();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  roll = () => {
    let { top } = this.state;
    const { dataList = [] } = this.props;

    this.timer && clearInterval(this.timer);
    this.timer = setInterval(() => {
      top--;

      if (top === dataList.length * 50 * (-1)) {
        top = 0;
      }
      this.setState({
        top,
      });
    }, 60);
  };

  handleEnter = () => {
    clearInterval(this.timer);
  };

  handleLeave = () => {
    this.roll();
  };

  render() {
    const { top } = this.state;
    const { dataList = [] } = this.props;
    const styleConfig = {
      transform: `translateY(${top}px)`,
    };

    return (
      <div className='job_box'>
        <div className='title'>
          <span>最新职位</span>
          <span className='job-more'>更多</span>
        </div>
        <div className='content' style={styleConfig}>
          {
            dataList.map((item) => {
              return <div key={item.id} onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} onClick={() => {
                this.handleClick(item);
              }} className='item'>
                <div className='item1'>{item.jobName}</div>
                <div className='item2'>{item.site}</div>
                <div className='item3'>{item.time}</div>
              </div>;
            })
          }
        </div>
      </div>
    );
  }
}

export default JobBar;
