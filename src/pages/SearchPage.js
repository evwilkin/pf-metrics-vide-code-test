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

const SearchPage = () => {
  // Sample data for search metrics
  const queryTypeData = [
    { x: 'Product Search', y: 3456 },
    { x: 'User Search', y: 2234 },
    { x: 'Content Search', y: 1567 },
    { x: 'Help Search', y: 892 },
    { x: 'API Search', y: 445 },
  ];

  const responseTimeData = [
    { x: 'Mon', y: 45 },
    { x: 'Tue', y: 52 },
    { x: 'Wed', y: 38 },
    { x: 'Thu', y: 61 },
    { x: 'Fri', y: 43 },
    { x: 'Sat', y: 49 },
    { x: 'Sun', y: 41 },
  ];

  const searchQueryData = [
    {
      id: 1,
      query: 'user management',
      frequency: 567,
      results: 24,
      avgCTR: '12.5%',
      avgPosition: 2.3,
    },
    {
      id: 2,
      query: 'dashboard setup',
      frequency: 445,
      results: 18,
      avgCTR: '18.2%',
      avgPosition: 1.8,
    },
    {
      id: 3,
      query: 'api documentation',
      frequency: 423,
      results: 32,
      avgCTR: '8.9%',
      avgPosition: 3.1,
    },
    {
      id: 4,
      query: 'billing information',
      frequency: 334,
      results: 12,
      avgCTR: '22.1%',
      avgPosition: 1.5,
    },
    {
      id: 5,
      query: 'security settings',
      frequency: 298,
      results: 15,
      avgCTR: '15.7%',
      avgPosition: 2.2,
    },
    {
      id: 6,
      query: 'integration guide',
      frequency: 245,
      results: 28,
      avgCTR: '11.3%',
      avgPosition: 2.9,
    },
    {
      id: 7,
      query: 'troubleshooting',
      frequency: 223,
      results: 45,
      avgCTR: '6.8%',
      avgPosition: 4.2,
    },
    {
      id: 8,
      query: 'getting started',
      frequency: 198,
      results: 8,
      avgCTR: '28.5%',
      avgPosition: 1.2,
    },
  ];

  const queryColumns = [
    { key: 'query', title: 'Search Query' },
    { key: 'frequency', title: 'Frequency' },
    { key: 'results', title: 'Results Count' },
    { key: 'avgCTR', title: 'Avg CTR' },
    { key: 'avgPosition', title: 'Avg Position' },
  ];

  const searchSessionData = [
    {
      id: 1,
      session: 'SRCH-001',
      user: 'john.doe@example.com',
      queries: 3,
      duration: '4m 23s',
      results: 'Found',
    },
    {
      id: 2,
      session: 'SRCH-002',
      user: 'jane.smith@example.com',
      queries: 1,
      duration: '1m 45s',
      results: 'Found',
    },
    {
      id: 3,
      session: 'SRCH-003',
      user: 'mike.wilson@example.com',
      queries: 5,
      duration: '8m 12s',
      results: 'Partial',
    },
    {
      id: 4,
      session: 'SRCH-004',
      user: 'sarah.jones@example.com',
      queries: 2,
      duration: '2m 56s',
      results: 'Found',
    },
    {
      id: 5,
      session: 'SRCH-005',
      user: 'david.brown@example.com',
      queries: 7,
      duration: '12m 34s',
      results: 'Not Found',
    },
    {
      id: 6,
      session: 'SRCH-006',
      user: 'lisa.garcia@example.com',
      queries: 1,
      duration: '0m 58s',
      results: 'Found',
    },
    {
      id: 7,
      session: 'SRCH-007',
      user: 'robert.taylor@example.com',
      queries: 4,
      duration: '6m 18s',
      results: 'Partial',
    },
  ];

  const sessionColumns = [
    { key: 'session', title: 'Session ID' },
    { key: 'user', title: 'User' },
    { key: 'queries', title: 'Query Count' },
    { key: 'duration', title: 'Session Duration' },
    { key: 'results', title: 'Search Outcome' },
  ];

  return (
    <React.Fragment>
      {/* Page Header */}
      <PageSection variant="light">
        <Content component="h1">Search Metrics</Content>
        <Content component="p">
          Monitor search functionality, query performance, and user search
          behavior. Track search patterns, response times, and click-through
          rates.
        </Content>
      </PageSection>

      {/* Charts Section */}
      <PageSection>
        <Grid hasGutter>
          <GridItem span={12} md={6}>
            <SampleChart
              title="Search Query Types"
              data={queryTypeData}
              type="donut"
            />
          </GridItem>
          <GridItem span={12} md={6}>
            <SampleChart
              title="Weekly Response Times (ms)"
              data={responseTimeData}
              type="bar"
            />
          </GridItem>
        </Grid>
      </PageSection>

      {/* Summary Cards */}
      <PageSection>
        <Grid hasGutter>
          <GridItem span={12} md={3}>
            <Card>
              <CardTitle>Total Searches</CardTitle>
              <CardBody>
                <Content component="h2" className="pf-v6-u-color-blue-400">
                  8,594
                </Content>
                <Content component="small" className="pf-v6-u-color-200">
                  +22% from last week
                </Content>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem span={12} md={3}>
            <Card>
              <CardTitle>Success Rate</CardTitle>
              <CardBody>
                <Content component="h2" className="pf-v6-u-color-green-400">
                  87%
                </Content>
                <Content component="small" className="pf-v6-u-color-200">
                  +5% from last week
                </Content>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem span={12} md={3}>
            <Card>
              <CardTitle>Avg Response Time</CardTitle>
              <CardBody>
                <Content component="h2" className="pf-v6-u-color-orange-400">
                  47ms
                </Content>
                <Content component="small" className="pf-v6-u-color-200">
                  -8ms from last week
                </Content>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem span={12} md={3}>
            <Card>
              <CardTitle>Click-through Rate</CardTitle>
              <CardBody>
                <Content component="h2" className="pf-v6-u-color-purple-400">
                  15.2%
                </Content>
                <Content component="small" className="pf-v6-u-color-200">
                  +2.1% from last week
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
              title="Top Search Queries Analysis"
              data={searchQueryData}
              columns={queryColumns}
            />
          </GridItem>
        </Grid>
      </PageSection>

      <PageSection hasBodyWrapper>
        <Grid hasGutter>
          <GridItem span={12}>
            <SampleTable
              title="Recent Search Sessions"
              data={searchSessionData}
              columns={sessionColumns}
            />
          </GridItem>
        </Grid>
      </PageSection>
    </React.Fragment>
  );
};

export default SearchPage;
