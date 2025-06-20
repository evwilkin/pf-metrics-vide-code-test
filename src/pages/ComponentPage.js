import React from 'react';
import {
  PageSection,
  Content,
  Grid,
  GridItem,
  Card,
  CardTitle,
  CardBody,
} from '@patternfly/react-core';
import SampleTable from '../components/SampleTable';
import SampleChart from '../components/SampleChart';

const ComponentPage = () => {
  // Sample data for component metrics
  const componentUsageData = [
    { x: 'Button', y: 1456 },
    { x: 'Card', y: 1123 },
    { x: 'Table', y: 892 },
    { x: 'Form', y: 745 },
    { x: 'Modal', y: 567 },
    { x: 'Alert', y: 445 },
  ];

  const renderTimeData = [
    { x: 'Mon', y: 12.3 },
    { x: 'Tue', y: 11.8 },
    { x: 'Wed', y: 13.1 },
    { x: 'Thu', y: 12.7 },
    { x: 'Fri', y: 11.5 },
    { x: 'Sat', y: 12.9 },
    { x: 'Sun', y: 13.2 },
  ];

  const componentTableData = [
    {
      id: 1,
      component: 'Button',
      usage: 1456,
      renderTime: '2.1ms',
      errorRate: '0.1%',
      version: 'v2.3.1',
    },
    {
      id: 2,
      component: 'Card',
      usage: 1123,
      renderTime: '3.4ms',
      errorRate: '0.2%',
      version: 'v1.8.2',
    },
    {
      id: 3,
      component: 'Table',
      usage: 892,
      renderTime: '15.6ms',
      errorRate: '0.5%',
      version: 'v3.1.0',
    },
    {
      id: 4,
      component: 'Form',
      usage: 745,
      renderTime: '8.3ms',
      errorRate: '1.2%',
      version: 'v2.7.4',
    },
    {
      id: 5,
      component: 'Modal',
      usage: 567,
      renderTime: '4.7ms',
      errorRate: '0.3%',
      version: 'v1.9.1',
    },
    {
      id: 6,
      component: 'Alert',
      usage: 445,
      renderTime: '1.8ms',
      errorRate: '0.1%',
      version: 'v2.1.3',
    },
    {
      id: 7,
      component: 'Dropdown',
      usage: 334,
      renderTime: '5.2ms',
      errorRate: '0.8%',
      version: 'v2.5.0',
    },
    {
      id: 8,
      component: 'Tooltip',
      usage: 223,
      renderTime: '1.5ms',
      errorRate: '0.2%',
      version: 'v1.4.2',
    },
  ];

  const componentColumns = [
    { key: 'component', title: 'Component' },
    { key: 'usage', title: 'Usage Count' },
    { key: 'renderTime', title: 'Avg Render Time' },
    { key: 'errorRate', title: 'Error Rate' },
    { key: 'version', title: 'Version' },
  ];

  const propsAnalysisData = [
    {
      id: 1,
      component: 'Button',
      prop: 'variant',
      value: 'primary',
      frequency: 567,
    },
    {
      id: 2,
      component: 'Button',
      prop: 'variant',
      value: 'secondary',
      frequency: 445,
    },
    {
      id: 3,
      component: 'Button',
      prop: 'size',
      value: 'medium',
      frequency: 789,
    },
    {
      id: 4,
      component: 'Card',
      prop: 'isClickable',
      value: 'true',
      frequency: 234,
    },
    {
      id: 5,
      component: 'Table',
      prop: 'sortBy',
      value: 'name',
      frequency: 345,
    },
    {
      id: 6,
      component: 'Form',
      prop: 'isRequired',
      value: 'true',
      frequency: 456,
    },
    { id: 7, component: 'Modal', prop: 'size', value: 'large', frequency: 123 },
  ];

  const propsColumns = [
    { key: 'component', title: 'Component' },
    { key: 'prop', title: 'Property' },
    { key: 'value', title: 'Value' },
    { key: 'frequency', title: 'Usage Frequency' },
  ];

  return (
    <React.Fragment>
      {/* Page Header */}
      <PageSection variant="light">
        <Content component="h1">Component Metrics</Content>
        <Content component="p">
          Track component usage, performance, and interaction patterns across
          your application. Monitor render times, error rates, and property
          usage patterns.
        </Content>
      </PageSection>

      {/* Charts Section */}
      <PageSection>
        <Grid hasGutter>
          <GridItem span={12} md={6}>
            <SampleChart
              title="Component Usage Distribution"
              data={componentUsageData}
              type="bar"
            />
          </GridItem>
          <GridItem span={12} md={6}>
            <SampleChart
              title="Weekly Render Performance"
              data={renderTimeData}
              type="line"
            />
          </GridItem>
        </Grid>
      </PageSection>

      {/* Summary Cards */}
      <PageSection>
        <Grid hasGutter>
          <GridItem span={12} md={3}>
            <Card>
              <CardTitle>Total Components</CardTitle>
              <CardBody>
                <Content component="h2" className="pf-v6-u-color-blue-400">
                  48
                </Content>
                <Content component="small" className="pf-v6-u-color-200">
                  +3 new this month
                </Content>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem span={12} md={3}>
            <Card>
              <CardTitle>Component Instances</CardTitle>
              <CardBody>
                <Content component="h2" className="pf-v6-u-color-green-400">
                  5,785
                </Content>
                <Content component="small" className="pf-v6-u-color-200">
                  +15% from last week
                </Content>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem span={12} md={3}>
            <Card>
              <CardTitle>Avg Render Time</CardTitle>
              <CardBody>
                <Content component="h2" className="pf-v6-u-color-orange-400">
                  6.8ms
                </Content>
                <Content component="small" className="pf-v6-u-color-200">
                  -1.2ms from last week
                </Content>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem span={12} md={3}>
            <Card>
              <CardTitle>Error Rate</CardTitle>
              <CardBody>
                <Content component="h2" className="pf-v6-u-color-red-400">
                  0.4%
                </Content>
                <Content component="small" className="pf-v6-u-color-200">
                  -0.1% from last week
                </Content>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </PageSection>

      {/* Data Tables */}
      <PageSection hasBodyWrapper>
        <Grid hasGutter>
          <GridItem span={12}>
            <SampleTable
              title="Component Performance Analysis"
              data={componentTableData}
              columns={componentColumns}
            />
          </GridItem>
        </Grid>
      </PageSection>

      <PageSection hasBodyWrapper>
        <Grid hasGutter>
          <GridItem span={12}>
            <SampleTable
              title="Component Props Usage Analysis"
              data={propsAnalysisData}
              columns={propsColumns}
            />
          </GridItem>
        </Grid>
      </PageSection>
    </React.Fragment>
  );
};

export default ComponentPage;
