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

const WebPage = () => {
  // Sample data for web metrics
  const pageViewsData = [
    { x: 'Home', y: 1245 },
    { x: 'Products', y: 892 },
    { x: 'About', y: 567 },
    { x: 'Contact', y: 234 },
    { x: 'Blog', y: 445 },
  ];

  const trafficData = [
    { x: 'Mon', y: 2340 },
    { x: 'Tue', y: 2890 },
    { x: 'Wed', y: 3120 },
    { x: 'Thu', y: 2750 },
    { x: 'Fri', y: 3450 },
    { x: 'Sat', y: 2890 },
    { x: 'Sun', y: 2340 },
  ];

  const performanceTableData = [
    {
      id: 1,
      page: 'Home Page',
      loadTime: '1.2s',
      users: 1245,
      bounceRate: '32%',
      conversions: 89,
    },
    {
      id: 2,
      page: 'Product List',
      loadTime: '1.8s',
      users: 892,
      bounceRate: '45%',
      conversions: 156,
    },
    {
      id: 3,
      page: 'Product Detail',
      loadTime: '2.1s',
      users: 734,
      bounceRate: '38%',
      conversions: 234,
    },
    {
      id: 4,
      page: 'Checkout',
      loadTime: '1.5s',
      users: 445,
      bounceRate: '15%',
      conversions: 312,
    },
    {
      id: 5,
      page: 'About Us',
      loadTime: '0.9s',
      users: 567,
      bounceRate: '55%',
      conversions: 12,
    },
    {
      id: 6,
      page: 'Contact',
      loadTime: '1.1s',
      users: 234,
      bounceRate: '48%',
      conversions: 23,
    },
    {
      id: 7,
      page: 'Blog',
      loadTime: '1.4s',
      users: 445,
      bounceRate: '42%',
      conversions: 34,
    },
    {
      id: 8,
      page: 'FAQ',
      loadTime: '1.0s',
      users: 123,
      bounceRate: '52%',
      conversions: 8,
    },
  ];

  const performanceColumns = [
    { key: 'page', title: 'Page' },
    { key: 'loadTime', title: 'Load Time' },
    { key: 'users', title: 'Users' },
    { key: 'bounceRate', title: 'Bounce Rate' },
    { key: 'conversions', title: 'Conversions' },
  ];

  const userSessionsData = [
    {
      id: 1,
      session: 'SES-001',
      user: 'john.doe@example.com',
      duration: '12m 34s',
      pages: 5,
      device: 'Desktop',
    },
    {
      id: 2,
      session: 'SES-002',
      user: 'jane.smith@example.com',
      duration: '8m 45s',
      pages: 3,
      device: 'Mobile',
    },
    {
      id: 3,
      session: 'SES-003',
      user: 'mike.wilson@example.com',
      duration: '15m 12s',
      pages: 8,
      device: 'Tablet',
    },
    {
      id: 4,
      session: 'SES-004',
      user: 'sarah.jones@example.com',
      duration: '6m 23s',
      pages: 2,
      device: 'Desktop',
    },
    {
      id: 5,
      session: 'SES-005',
      user: 'david.brown@example.com',
      duration: '11m 56s',
      pages: 6,
      device: 'Mobile',
    },
    {
      id: 6,
      session: 'SES-006',
      user: 'lisa.garcia@example.com',
      duration: '9m 18s',
      pages: 4,
      device: 'Desktop',
    },
    {
      id: 7,
      session: 'SES-007',
      user: 'robert.taylor@example.com',
      duration: '14m 07s',
      pages: 7,
      device: 'Tablet',
    },
  ];

  const sessionColumns = [
    { key: 'session', title: 'Session ID' },
    { key: 'user', title: 'User' },
    { key: 'duration', title: 'Duration' },
    { key: 'pages', title: 'Pages Viewed' },
    { key: 'device', title: 'Device Type' },
  ];

  return (
    <React.Fragment>
      {/* Page Header */}
      <PageSection variant="light">
        <Content component="h1">Web Metrics</Content>
        <Content component="p">
          Monitor web application performance, user engagement, and traffic
          analytics. Track page load times, user sessions, bounce rates, and
          conversion metrics.
        </Content>
      </PageSection>

      {/* Charts Section */}
      <PageSection>
        <Grid hasGutter>
          <GridItem span={12} md={6}>
            <SampleChart
              title="Page Views Distribution"
              data={pageViewsData}
              type="donut"
            />
          </GridItem>
          <GridItem span={12} md={6}>
            <SampleChart
              title="Weekly Traffic Trends"
              data={trafficData}
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
              <CardTitle>Total Page Views</CardTitle>
              <CardBody>
                <Content component="h2" className="pf-v6-u-color-blue-400">
                  18,456
                </Content>
                <Content component="small" className="pf-v6-u-color-200">
                  +12% from last week
                </Content>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem span={12} md={3}>
            <Card>
              <CardTitle>Unique Visitors</CardTitle>
              <CardBody>
                <Content component="h2" className="pf-v6-u-color-green-400">
                  12,234
                </Content>
                <Content component="small" className="pf-v6-u-color-200">
                  +8% from last week
                </Content>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem span={12} md={3}>
            <Card>
              <CardTitle>Average Load Time</CardTitle>
              <CardBody>
                <Content component="h2" className="pf-v6-u-color-orange-400">
                  1.4s
                </Content>
                <Content component="small" className="pf-v6-u-color-200">
                  -0.2s from last week
                </Content>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem span={12} md={3}>
            <Card>
              <CardTitle>Conversion Rate</CardTitle>
              <CardBody>
                <Content component="h2" className="pf-v6-u-color-purple-400">
                  3.2%
                </Content>
                <Content component="small" className="pf-v6-u-color-200">
                  +0.5% from last week
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
              title="Page Performance Analysis"
              data={performanceTableData}
              columns={performanceColumns}
            />
          </GridItem>
        </Grid>
      </PageSection>

      <PageSection hasBodyWrapper>
        <Grid hasGutter>
          <GridItem span={12}>
            <SampleTable
              title="Recent User Sessions"
              data={userSessionsData}
              columns={sessionColumns}
            />
          </GridItem>
        </Grid>
      </PageSection>
    </React.Fragment>
  );
};

export default WebPage;
