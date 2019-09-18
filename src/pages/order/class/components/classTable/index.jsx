import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Input, Table, Col, Row, Select, Button, Modal } from 'antd';
import styles from './index.less';
import Mock from 'mockjs';

const { Option } = Select;

class ClassTable extends Component {
  state = {
    labelName: ['姓名', '手机号', '课程编码'],
    name: ['username', 'tel', 'code'],
    visible: false,
    confirmLoading: false,
    tableList: [],
    columns: [
      {
        title: '订单编码',
        dataIndex: 'code',
      },
      {
        title: '用户',
        dataIndex: 'username',
      },
      {
        title: '手机号',
        dataIndex: 'tel',
      },
      {
        title: '订单名',
        dataIndex: 'name',
      },
      {
        title: '订单金额',
        dataIndex: 'money',
      },
      {
        title: '支付时间',
        dataIndex: 'time',
      },
      {
        title: '操作',
        dataIndex: 'action',
        render: () => <a>查看</a>,
      },
    ],
  };
  getFields() {
    let { labelName, name } = this.state;
    console.log(this.props);
    const count = labelName;
    const { getFieldDecorator } = this.props.form;
    const children = [];
    for (let i = 0; i < labelName.length; i++) {
      children.push(
        <Col span={8} key={i}>
          <Form.Item label={labelName[i]}>
            {getFieldDecorator(`${name[i]}`, {
              rules: [
                {
                  required: true,
                  message: `Please input your ${name[i]}!`,
                },
              ],
            })(<Input placeholder="请输入" />)}
          </Form.Item>
        </Col>,
      );
    }
    return children;
  }

  handleCurrencyChange = () => {};
  componentDidMount() {
    let basicData = Mock.mock({
      'list|1-100': [
        {
          'key|+1': 1,
          code: '@ip',
          username: '@name',
          money: '@integer(0)',
          name: '@character("upper")',
          tel: '@string("lower", 13, 20)',
          time: '@datetime("yyyy-MM-dd A HH:mm:ss")',
        },
      ],
    });
    this.setState({
      tableList: basicData,
    });
  }
  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  };
  handleFormReset = () => {};
  handleFormConfim = () => {
    this.setState({
      visible: true,
    });
  };
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };
  handleOk = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const { columns, tableList, visible, confirmLoading } = this.state;
    const formItemLayout = {
      labelCol: {
        xs: { span: 14 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    return (
      <div className={styles.ClassTableInput}>
        <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
          <Row gutter={24}>{this.getFields()}</Row>
          <Form.Item label="所在地">
            <Select
              placeholder="请选择"
              style={{ width: '15%' }}
              onChange={this.handleCurrencyChange}
            >
              <Option value="close">关闭</Option>
              <Option value="open">运行中</Option>
            </Select>
          </Form.Item>
          <Col md={8} sm={24}>
            <span className={styles.submitButtons}>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button
                style={{
                  marginLeft: 8,
                }}
                onClick={this.handleFormReset}
              >
                重置
              </Button>
              <Button
                type="primary"
                style={{
                  marginLeft: 8,
                }}
                onClick={this.handleFormConfim}
              >
                +新建
              </Button>
            </span>
          </Col>
        </Form>
        <Table style={{ marginTop: '25px' }} columns={columns} dataSource={tableList.list} />

        <Modal
          title="新建规则"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <Form {...formItemLayout}>
            <Form.Item label="描述">
              {getFieldDecorator('description', {
                rules: [
                  {
                    required: true,
                    message: `Please input your description!`,
                  },
                ],
              })(<Input placeholder="请输入" />)}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}
const WrappedRegistrationForm = Form.create({ name: 'register' });

export default withRouter(WrappedRegistrationForm(ClassTable));
