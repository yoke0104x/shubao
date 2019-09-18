import { Col, Row, Input, Select, Button, Table } from 'antd';
import GGEditor, { Mind } from 'gg-editor';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React from 'react';
import { formatMessage } from 'umi-plugin-react/locale';

//import data from './worldCup2018.json';
import styles from './index.less';

const { Option } = Select;
const columns = [
  {
    title: '课程编号',
    dataIndex: '课程编号',
  },
  {
    title: '课程名',
    dataIndex: '课程名',
  },
  {
    title: '所属作者',
    dataIndex: '所属作者',
    defaultSortOrder: 'descend',
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    // sorter: (a, b) => a.手机号.length - b.手机号.length,
    sortDirections: ['descend', 'ascend'],
  }, {
    title: '售卖价格',
    dataIndex: '售卖价格',
    sorter: (a, b) => a.售卖价格.length - b.售卖价格.length,
  },
  {
    title: '售卖数量',
    dataIndex: '售卖数量',
    sorter: (a, b) => a.售卖数量 - b.售卖数量,
  }, {
    title: '总收入',
    dataIndex: '总收入',
    sorter: (a, b) => a.总收入 - b.总收入,
  },
  {
    title: '所属分类',
    dataIndex: '所属分类',
   
  },
  {
    title: '状态',
    dataIndex: '状态',
    filters: [
      {
        text: '上线',
        value: '上线',
      },
      {
        text: '未上线',
        value: '未上线',
      }, {
        text: '上线',
        value: '上线',
      },
      {
        text: '未上线',
        value: '未上线',
      },
    ],
  },
  

  {
    title: '操作',
    dataIndex: '操作',
  },
]
const data = [
  {
    key: '1',
    课程编号: '8',
    课程名: 'TradeCode 5973',
    所属作者: 'TradeCode 5973',
    售卖价格: '19',
    售卖数量: '87879',
    总收入: '8',
    所属分类: '亲子8',
    状态: '未上线',
    操作: '查看编辑',
  },
  {
    key: '2',
    课程编号: '13',
    课程名: 'TradeCode 5973',
    所属作者: 'TradeCode 5973',
    售卖价格: '63',
    售卖数量: '87879',
    总收入: '13',
    所属分类: '亲子8',
    状态: '未上线',
    操作: '查看编辑',
  },
  {
    key: '3',
    课程编号: '23',
    课程名: 'TradeCode 5973',
    所属作者: 'TradeCode 5973',
    售卖价格: '45',
    售卖数量: '878',
    总收入: '23',
    所属分类: '亲子8',
    状态: '未上线',
    操作: '查看编辑',
  },
  {
    key: '4',
    课程编号: '46',
    课程名: 'TradeCode 5973',
    所属作者: 'TradeCode 5973',
    售卖价格: '69',
    售卖数量: '46',
    总收入: '46',
    所属分类: '亲子9',
    状态: '未上线',
    操作: '查看编辑',
  },
  {
    key: '5',
    课程编号: '71',
    课程名: 'TradeCode 5973',
    所属作者: 'TradeCode 5973',
    售卖价格: '34',
    售卖数量: '38',
    总收入: '5',
    所属分类: '亲子8',
    状态: '未上线',
    操作: '查看编辑',
  },
  {
    key: '6',
    课程编号: '87',
    课程名: 'TradeCode 5973',
    所属作者: 'TradeCode 5973',
    售卖价格: '14',
    售卖数量: '108',
    总收入: '6',
    所属分类: '亲子8',
    状态: '未上线',
    操作: '查看编辑',
  },
  {
    key: '7',
    课程编号: '90',
    课程名: 'TradeCode 5973',
    所属作者: 'TradeCode 5973',
    售卖价格: '67',
    售卖数量: '28',
    总收入: '7',
    所属分类: '亲子8',
    状态: '未上线',
    操作: '查看编辑',
  },
  {
    key: '8',
    课程编号: '102',
    课程名: 'TradeCode 5973',
    所属作者: 'TradeCode 5973',
    售卖价格: '45',
    售卖数量: '899',
    总收入: '8',
    所属分类: '亲子10',
    状态: '未上线',
    操作: '查看编辑',
  },
  {
    key: '9',
    课程编号: '106',
    课程名: 'TradeCode 5973',
    所属作者: 'TradeCode 5973',
    售卖价格: '56',
    售卖数量: '18',
    总收入: '9',
    所属分类: '亲子8',
    状态: '未上线',
    操作: '查看编辑',
  },
  {
    key: '10',
    课程编号: '190',
    课程名: 'TradeCode 5973',
    所属作者: 'TradeCode 5973',
    售卖价格: '34',
    售卖数量: '28',
    总收入: '10',
    所属分类: '亲子12',
    状态: '未上线',
    操作: '查看编辑',
  },
  {
    key: '11',
    课程编号: '122',
    课程名: 'TradeCode 5973',
    所属作者: 'TradeCode 5973',
    售卖价格: '12',
    售卖数量: '80',
    总收入: '11',
    所属分类: '正常',
    状态: '查看 编辑',
    操作: '查看编辑',
  },
]
GGEditor.setTrackable(false);
export default () => (
  <PageHeaderWrapper
    // content={formatMessage({
    //   id: 'editor-flow.description',
    //   defaultMessage: '',
    // })}
  >
  <GGEditor className={styles.editor}>
    <div className={styles.content}>
      <div className={styles.top}>
        <ul>
          <li><span>姓名：</span><Input placeholder="请输入" className={styles.ipt} /></li>
          <li><span>手机号：</span><Input placeholder="请输入" className={styles.ipt} /></li>
          <li><span>课程编号：</span><Input placeholder="请输入" className={styles.ipt} /></li>
          <li style={{ marginTop: 20 }}><span>所在地：</span><Select defaultValue="请选择" style={{ width: 260 }} >
            <Option value="关闭">关闭</Option>
            <Option value="运行中">运行中</Option>
          </Select>
          </li>
        </ul>
        <div className={styles.btn}>
          <Button type="primary" className={styles.btns}>查询</Button>
          <Button className={styles.btns}>重置</Button>
          <Button type="primary" icon="plus" className={styles.btns}>+新建</Button>
        </div>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  </GGEditor>
  </PageHeaderWrapper>
);