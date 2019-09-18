import React from 'react';
import ClassTable from './components/classTable';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { formatMessage } from 'umi-plugin-react/locale';
import { Layout } from 'antd';

const { Content } = Layout;

class ClassOrder extends React.Component {
  render() {
    return (
      <PageHeaderWrapper>
        <Layout style={{ padding: '0 0 24px' }}>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <ClassTable style={{ height: '100vh', overflowY: 'scroll' }} />
          </Content>
        </Layout>
      </PageHeaderWrapper>
    );
  }
}

export default ClassOrder;
