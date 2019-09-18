import { Col, Row, Table, Pagination } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { Component } from 'react';
import { formatMessage } from 'umi-plugin-react/locale';
import styles from './index.less';
import getVerifydata from '../../../../mock/beforeverify';

const loading = false;

function handleTableChange(pagination, filters, sorter) {
  console.log(pagination, filters, sorter)
};

const columns = [{
  title: '课程名',
  dataIndex: 'className',
},
{
  title: '所属分类',
  dataIndex: 'Type',
},
{
  title: '所属老师',
  dataIndex: 'teach',
},
{
  title: '提交时间',
  dataIndex: 'updataTime',
  defaultSortOrder: 'descend',
  sorter: (a, b) => a.age - b.age,
},
{
  title: '课程价格',
  dataIndex: 'classPrice',
},
{
  title: '操作',
  dataIndex: 'action',
  render: () => <a>审核</a>
}]
export default class Beforeverify extends Component {
  render() {
    return (
      <PageHeaderWrapper >
        <Table loading={loading} columns={columns} dataSource={getVerifydata} style={{ background: '#fff' }} />
      </PageHeaderWrapper >
    )
  }
}

