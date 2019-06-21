import React, { PureComponent } from 'react';
import { Input, Button } from 'antd';
import JobBar from '../../components/JobBar';
import './index.less';

export default class Index extends PureComponent {
  state = {
    keywords: ['JAVA', 'IOS', '数据', '安全', '搜索', '算法', '运营', '视觉', '交互', '前端'],
    jobList: [
      {
        id: 1,
        jobName: '互动娱乐事业部-游戏引擎测试开发工程师',
        site: '杭州',
        time: '1小时前',
      },
      {
        id: 2,
        jobName: 'AliExpress-行业运营专家-母婴玩具',
        site: '杭州',
        time: '2小时前',
      },
      {
        id: 3,
        jobName: '蚂蚁金服-商户服务-国际事业群',
        site: '杭州',
        time: '3小时前',
      },
      {
        id: 4,
        jobName: '互动娱乐事业部-游戏引擎测试开发工程师',
        site: '杭州',
        time: '4小时前',
      },
      {
        id: 5,
        jobName: 'AliExpress-行业运营专家-母婴玩具',
        site: '杭州',
        time: '5小时前',
      },
      {
        id: 6,
        jobName: '蚂蚁金服-商户服务-国际事业群',
        site: '杭州',
        time: '6小时前',
      },
    ],
  };

  render() {
    const { keywords, jobList } = this.state;
    return (
      <div className="con">
        <div className='search-con'>
          <div className='content'>
            <div className='font-en'>If not now, when?</div>
            <div className='font-en'>If not me, who?</div>
            <div className='font-zh'>此时此刻，非我莫属！</div>
            <div className='input-con'>
              <Input type='text' placeholder='请输入职位关键词' />
              <Button className='input-btn'>搜索</Button>
            </div>
            <div className='keys-con'>
              <span className='hot-search'>热门搜索:</span>
              {
                keywords.map(item => <span key={item} className='keyword'>{item}</span>)
              }
            </div>

          </div>
        </div>

        <div className='middle-box'>
          <div className='job'>
            <JobBar dataList={jobList} />
          </div>

          <div className='adv'>
            <a href='https://www.aliyun.com/careers?spm=a2obv.11410899.0.aliyun.55ef6c61z60PBp' className='adv-link'>
              <img src='https://img.alicdn.com/tfs/TB1Z7JvoxGYBuNjy0FnXXX5lpXa-358-136.png' alt="" width='179px'
                   className='adv-img' />
            </a>
            <a
              href='https://job.alibaba.com/zhaopin/informationPlatformBu.htm?spm=a2obv.11410899.0.xinxipingtai.55ef6c61JwMqQd'
              className='adv-link'>
              <img src='https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg' alt="" width='260px'
                   className='adv-img' />
            </a>
          </div>
        </div>

      </div>
    );
  }
}
