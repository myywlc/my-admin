import React, { PureComponent } from 'react';
import cx from 'classnames'
import { Button, Icon } from 'antd';
import styles from './index.module.less';

class Collapse extends PureComponent {
  state = {
    open: false,
  };

  handleClick = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  };

  render() {
    const { open } = this.state;
    const { title } = this.props;

    return (
      <div className={styles.collapse}>
        <div onClick={this.handleClick} className={cx({[styles.handle]: true, [styles.borderChange]: !open})}>
          {
            open ? (
              <Icon type="down" />
            ) : (
              <Icon type="up" />
            )
          }
          <span className={styles.title}>{title}</span>
        </div>
        {
          open && (
            <div className={styles.content}>
              {
                this.props.children
              }
            </div>
          )
        }
      </div>
    );
  }
}

export default class CollapsePanel extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: 80 }}>
        <Collapse title={'hahaha'}>
          <Button>123</Button>
        </Collapse>

        <Collapse title={'hahaha'}>
          <Button>123</Button>
        </Collapse>

        <Collapse title={'hahaha'}>
          <Button>123</Button>
        </Collapse>
      </div>
    );
  }
}
