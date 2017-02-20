import React, { Component } from 'react';
import { ListView, Button } from 'antd-mobile';

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    name: '麦当劳',
    des: '现麦当劳的经典汉堡、当期新品、优惠活动和最新优惠券',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    name: '肯德基',
    des: '肯德基宅急送3/19前官网订餐产品满39元',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    name: '食惠周',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
];

let index = data.length - 1;
const NUM_ROWS = 20;

class ShopList extends Component {

  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.genData = (pIndex = 0) => {
      const dataBlob = {};
      for (let i = 0; i < NUM_ROWS; i++) {
        const ii = (pIndex * NUM_ROWS) + i;
        dataBlob[`${ii}`] = `row - ${ii}`;
      }
      return dataBlob;
    };

    this.rData = this.genData();
    this.state = { ds: dataSource.cloneWithRows(this.rData), isLoading: false };
  }

  componentDidMount() {
    console.log('componentDidMount..');
  }

  onEndReached() {
    console.log('end reached.');
  }

  create() {
    location.hash = '/shop/create';
  }

  render() {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );

    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <div
          key={rowID}
          style={{ padding: '0.08rem 0.16rem', backgroundColor: 'white' }}
        >
          <h3 style={{ padding: 2, marginBottom: '0.08rem', borderBottom: '1px solid #F6F6F6' }}>
            {obj.name}
          </h3>
          <div style={{ display: 'flex' }}>
            <img alt="img" style={{ height: '1.28rem', marginRight: '0.08rem' }} src={obj.img} />
            <div style={{ display: 'inline-block' }}>
              <p>{obj.des}</p>
              <p><span style={{ fontSize: '1.6em', color: '#FF6E27' }}>{rowID}</span>元/任务</p>
            </div>
          </div>
        </div>
      );
    };

    return (
      <ListView
        dataSource={this.state.ds}
        renderHeader={() => <div><span>header</span><Button size="small" onClick={this.create} inline>创建</Button></div>}
        renderFooter={() => <div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? '加载中...' : '加载完毕'}
        </div>}
        renderRow={row}
        renderSeparator={separator}
        className="am-list"
        pageSize={4}
        scrollRenderAheadDistance={500}
        scrollEventThrottle={20}
        onScroll={() => { console.log('scroll'); }}
        useBodyScroll
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
}

export default ShopList;
