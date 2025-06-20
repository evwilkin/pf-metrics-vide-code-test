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

const ProductPage = () => {
  // Sample data for product metrics
  const featureUsageData = [
    { x: 'Dashboard', y: 2456 },
    { x: 'Reports', y: 1834 },
    { x: 'Analytics', y: 1567 },
    { x: 'Settings', y: 892 },
    { x: 'User Management', y: 745 },
    { x: 'API Access', y: 423 },
  ];

  const revenueData = [
    { x: 'Jan', y: 45000 },
    { x: 'Feb', y: 52000 },
    { x: 'Mar', y: 48000 },
    { x: 'Apr', y: 61000 },
    { x: 'May', y: 58000 },
    { x: 'Jun', y: 67000 },
    { x: 'Jul', y: 72000 },
  ];

  const userAdoptionData = [
    {
      id: 1,
      feature: 'Dashboard',
      users: 2456,
      adoption: '89%',
      satisfaction: 4.2,
      feedback: 'Positive',
    },
    {
      id: 2,
      feature: 'Reports',
      users: 1834,
      adoption: '67%',
      satisfaction: 4.0,
      feedback: 'Positive',
    },
    {
      id: 3,
      feature: 'Analytics',
      users: 1567,
      adoption: '57%',
      satisfaction: 4.5,
      feedback: 'Excellent',
    },
    {
      id: 4,
      feature: 'Settings',
      users: 892,
      adoption: '32%',
      satisfaction: 3.8,
      feedback: 'Good',
    },
    {
      id: 5,
      feature: 'User Management',
      users: 745,
      adoption: '27%',
      satisfaction: 3.9,
      feedback: 'Good',
    },
    {
      id: 6,
      feature: 'API Access',
      users: 423,
      adoption: '15%',
      satisfaction: 4.1,
      feedback: 'Positive',
    },
    {
      id: 7,
      feature: 'Mobile App',
      users: 1245,
      adoption: '45%',
      satisfaction: 4.3,
      feedback: 'Excellent',
    },
    {
      id: 8,
      feature: 'Notifications',
      users: 2134,
      adoption: '78%',
      satisfaction: 3.7,
      feedback: 'Good',
    },
  ];

  const adoptionColumns = [
    { key: 'feature', title: 'Feature' },
    { key: 'users', title: 'Active Users' },
    { key: 'adoption', title: 'Adoption Rate' },
    { key: 'satisfaction', title: 'Satisfaction Score' },
    { key: 'feedback', title: 'Overall Feedback' },
  ];

  const customerData = [
    {
      id: 1,
      customer: 'Acme Corp',
      plan: 'Enterprise',
      revenue: '$12,500',
      retention: '24 months',
      health: 'Excellent',
    },
    {
      id: 2,
      customer: 'TechStart Inc',
      plan: 'Professional',
      revenue: '$2,400',
      retention: '8 months',
      health: 'Good',
    },
    {
      id: 3,
      customer: 'Global Solutions',
      plan: 'Enterprise',
      revenue: '$18,900',
      retention: '36 months',
      health: 'Excellent',
    },
    {
      id: 4,
      customer: 'StartUp Labs',
      plan: 'Basic',
      revenue: '$480',
      retention: '3 months',
      health: 'At Risk',
    },
    {
      id: 5,
      customer: 'Enterprise Co',
      plan: 'Enterprise',
      revenue: '$25,000',
      retention: '48 months',
      health: 'Excellent',
    },
    {
      id: 6,
      customer: 'Mid-Size Biz',
      plan: 'Professional',
      revenue: '$4,800',
      retention: '12 months',
      health: 'Good',
    },
    {
      id: 7,
      customer: 'Innovation Hub',
      plan: 'Professional',
      revenue: '$3,600',
      retention: '18 months',
      health: 'Good',
    },
  ];

  const customerColumns = [
    { key: 'customer', title: 'Customer' },
    { key: 'plan', title: 'Plan Type' },
    { key: 'revenue', title: 'Monthly Revenue' },
    { key: 'retention', title: 'Customer Age' },
    { key: 'health', title: 'Health Score' },
  ];

  return (
    <React.Fragment>
      {/* Page Header */}
      <PageSection variant="light">
        <Content component="h1">Product Metrics</Content>
        <Content component="p">
          Analyze product performance, user adoption, and business key
          performance indicators. Track feature usage, revenue metrics, and
          customer satisfaction.
        </Content>
      </PageSection>

      {/* Charts Section */}
      <PageSection>
        <Grid hasGutter>
          <GridItem span={12} md={6}>
            <SampleChart
              title="Feature Usage Distribution"
              data={featureUsageData}
              type="donut"
            />
          </GridItem>
          <GridItem span={12} md={6}>
            <SampleChart
              title="Monthly Revenue Trends"
              data={revenueData}
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
              <CardTitle>Active Users</CardTitle>
              <CardBody>
                <Content component="h2" className="pf-v6-u-color-blue-400">
                  8,742
                </Content>
                <Content component="small" className="pf-v6-u-color-200">
                  +18% from last month
                </Content>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem span={12} md={3}>
            <Card>
              <CardTitle>Monthly Revenue</CardTitle>
              <CardBody>
                <Content component="h2" className="pf-v6-u-color-green-400">
                  $72,000
                </Content>
                <Content component="small" className="pf-v6-u-color-200">
                  +24% from last month
                </Content>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem span={12} md={3}>
            <Card>
              <CardTitle>Customer Satisfaction</CardTitle>
              <CardBody>
                <Content component="h2" className="pf-v6-u-color-orange-400">
                  4.1/5
                </Content>
                <Content component="small" className="pf-v6-u-color-200">
                  +0.2 from last month
                </Content>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem span={12} md={3}>
            <Card>
              <CardTitle>Retention Rate</CardTitle>
              <CardBody>
                <Content component="h2" className="pf-v6-u-color-purple-400">
                  92%
                </Content>
                <Content component="small" className="pf-v6-u-color-200">
                  +3% from last month
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
              title="Feature Adoption Analysis"
              data={userAdoptionData}
              columns={adoptionColumns}
            />
          </GridItem>
        </Grid>
      </PageSection>

      <PageSection hasBodyWrapper>
        <Grid hasGutter>
          <GridItem span={12}>
            <SampleTable
              title="Customer Overview"
              data={customerData}
              columns={customerColumns}
            />
          </GridItem>
        </Grid>
      </PageSection>
    </React.Fragment>
  );
};

export default ProductPage;
