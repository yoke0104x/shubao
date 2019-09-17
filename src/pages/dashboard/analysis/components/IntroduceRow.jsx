import { Col, Icon, Row, Tooltip } from 'antd';
import { FormattedMessage } from 'umi-plugin-react/locale';
import React from 'react';
import numeral from 'numeral';
import { ChartCard, MiniArea, MiniBar, TimelineChart, MiniProgress, Field } from './Charts';
import Trend from './Trend';
import Yuan from '../utils/Yuan';
import styles from '../style.less';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: {
    marginBottom: 24,
  },
};

const IntroduceRow = ({ loading, visitData, visitData2 }) => (
  <Row gutter={24} type="flex">
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        title={
          <FormattedMessage
            id="dashboard-analysis.analysis.total-sales"
            defaultMessage="Total Sales"
          />
        }
        action={
          <Tooltip
            title={
              <FormattedMessage
                id="dashboard-analysis.analysis.introduce"
                defaultMessage="Introduce"
              />
            }
          >
            <Icon type="info-circle-o" />
          </Tooltip>
        }
        loading={loading}
        total={() => <Yuan>126560</Yuan>}
        footer={
          <Field
            label={
              <FormattedMessage
                id="dashboard-analysis.analysis.day-sales"
                defaultMessage="Daily Sales"
              />
            }
            value={`￥${numeral(12423).format('0,0')}`}
          />
        }
        contentHeight={46}
      >
        <MiniArea line height={45} data={visitData2} />
        {/* <Trend
          flag="up"
          style={{
            marginRight: 16,
          }}
        >
          <FormattedMessage id="dashboard-analysis.analysis.week" defaultMessage="Weekly Changes" />
          <span className={styles.trendText}>12%</span>
        </Trend> */}
        {/* <Trend flag="down">
          <FormattedMessage id="dashboard-analysis.analysis.day" defaultMessage="Daily Changes" />
          <span className={styles.trendText}>11%</span>
        </Trend> */}
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>
      <ChartCard
        loading={loading}
        bordered={false}
        title={
          <FormattedMessage
            id="dashboard-analysis.analysis.operational-effect"
            defaultMessage="Operational Effect"
          />
        }
        action={
          <Tooltip
            title={
              <FormattedMessage
                id="dashboard-analysis.analysis.introduce"
                defaultMessage="Introduce"
              />
            }
          >
            <Icon type="info-circle-o" />
          </Tooltip>
        }
        total="780000"
        footer={
          <Field
            label={
              <FormattedMessage
                id="dashboard-analysis.analysis.conversion-rate"
                defaultMessage="Conversion Rate"
              />
            }
            value="234"
          />
        }
        contentHeight={46}
      >
        <MiniProgress percent={78} strokeWidth={8} target={80} color="#13C2C2" />
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        loading={loading}
        title={
          <FormattedMessage id="dashboard-analysis.analysis.payments" defaultMessage="Payments" />
        }
        action={
          <Tooltip
            title={
              <FormattedMessage
                id="dashboard-analysis.analysis.introduce"
                defaultMessage="Introduce"
              />
            }
          >
            <Icon type="info-circle-o" />
          </Tooltip>
        }
        total={numeral(6560).format('0,0')}
        footer={
          <Field
            label={
              <FormattedMessage
                id="dashboard-analysis.analysis.conversion-rate"
                defaultMessage="Conversion Rate"
              />
            }
            value="5555"
          />
        }
        contentHeight={46}
      >
        <MiniBar data={visitData} />
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        loading={loading}
        title={<FormattedMessage id="dashboard-analysis.analysis.visits" defaultMessage="Visits" />}
        action={
          <Tooltip
            title={
              <FormattedMessage
                id="dashboard-analysis.analysis.introduce"
                defaultMessage="Introduce"
              />
            }
          >
            <Icon type="info-circle-o" />
          </Tooltip>
        }
        total={numeral(8846).format('0,0')}
        footer={
          <Field
            label={
              <FormattedMessage
                id="dashboard-analysis.analysis.day-visits"
                defaultMessage="Daily Visits"
              />
            }
            value={numeral(1234).format('0,0')}
          />
        }
        contentHeight={46}
      >
        <MiniArea color="#975FE4" data={visitData} />
      </ChartCard>
    </Col>
  </Row>
);

export default IntroduceRow;
