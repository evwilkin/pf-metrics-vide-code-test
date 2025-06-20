import React from 'react';
import { Link } from 'react-router-dom';
import {
  PageSection,
  Content,
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  Button,
  Gallery,
  GalleryItem,
  Grid,
  GridItem,
  List,
  ListItem,
} from '@patternfly/react-core';
import {
  ChartLineIcon,
  CubesIcon,
  BoxIcon,
  SearchIcon,
  ArrowRightIcon,
} from '@patternfly/react-icons';

const HomePage = () => {
  const metricsPages = [
    {
      title: 'Web Metrics',
      description:
        'Monitor web application performance, user engagement, and traffic analytics.',
      icon: <ChartLineIcon size="lg" />,
      path: '/web',
      features: [
        'Page Load Times',
        'User Sessions',
        'Bounce Rate',
        'Conversion Tracking',
      ],
    },
    {
      title: 'Component Metrics',
      description:
        'Track component usage, performance, and interaction patterns across your application.',
      icon: <CubesIcon size="lg" />,
      path: '/component',
      features: [
        'Component Usage',
        'Render Performance',
        'Props Analysis',
        'Error Rates',
      ],
    },
    {
      title: 'Product Metrics',
      description:
        'Analyze product performance, user adoption, and business key performance indicators.',
      icon: <BoxIcon size="lg" />,
      path: '/product',
      features: [
        'User Adoption',
        'Feature Usage',
        'Revenue Metrics',
        'Customer Satisfaction',
      ],
    },
    {
      title: 'Search Metrics',
      description:
        'Monitor search functionality, query performance, and user search behavior.',
      icon: <SearchIcon size="lg" />,
      path: '/search',
      features: [
        'Query Performance',
        'Search Results',
        'Click-through Rate',
        'Search Patterns',
      ],
    },
  ];

  return (
    <React.Fragment>
      {/* Page Header */}
      <PageSection variant="light">
        <Content component="h1">Metrics Dashboard</Content>
        <Content component="p">
          Welcome to the comprehensive metrics dashboard. Monitor and analyze
          key performance indicators across web, component, product, and search
          domains.
        </Content>
      </PageSection>

      {/* Overview Section */}
      <PageSection>
        <Grid hasGutter>
          <GridItem span={12} md={8}>
            <Content component="h2" className="pf-v6-u-mb-md">
              Available Metrics
            </Content>
            <Content component="p" className="pf-v6-u-mb-lg">
              This dashboard provides detailed insights into four key areas of
              your application. Each section includes interactive charts, data
              tables, and comprehensive analytics to help you make data-driven
              decisions.
            </Content>
          </GridItem>
          <GridItem span={12} md={4}>
            <Card>
              <CardTitle>Quick Stats</CardTitle>
              <CardBody>
                <List isPlain>
                  <ListItem>
                    <strong>4</strong> Metric Categories
                  </ListItem>
                  <ListItem>
                    <strong>12+</strong> Data Visualizations
                  </ListItem>
                  <ListItem>
                    <strong>Real-time</strong> Updates
                  </ListItem>
                  <ListItem>
                    <strong>Interactive</strong> Charts & Tables
                  </ListItem>
                </List>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </PageSection>

      {/* Metrics Cards */}
      <PageSection hasBodyWrapper>
        <Gallery hasGutter minWidths={{ default: '300px' }}>
          {metricsPages.map((page) => (
            <GalleryItem key={page.path}>
              <Card isFullHeight isSelectable>
                <CardTitle>
                  <div className="pf-v6-u-display-flex pf-v6-u-align-items-center pf-v6-u-mb-sm">
                    <div className="pf-v6-u-mr-md pf-v6-u-color-blue-400">
                      {page.icon}
                    </div>
                    {page.title}
                  </div>
                </CardTitle>
                <CardBody>
                  <Content component="p" className="pf-v6-u-mb-md">
                    {page.description}
                  </Content>
                  <Content component="h4" className="pf-v6-u-mb-sm">
                    Key Features:
                  </Content>
                  <List isPlain isBordered>
                    {page.features.map((feature, index) => (
                      <ListItem key={index}>{feature}</ListItem>
                    ))}
                  </List>
                </CardBody>
                <CardFooter>
                  <Button
                    variant="primary"
                    component={Link}
                    to={page.path}
                    icon={<ArrowRightIcon />}
                    iconPosition="end"
                  >
                    View {page.title}
                  </Button>
                </CardFooter>
              </Card>
            </GalleryItem>
          ))}
        </Gallery>
      </PageSection>

      {/* Getting Started Section */}
      <PageSection variant="secondary">
        <Grid hasGutter>
          <GridItem span={12} md={6}>
            <Content component="h3" className="pf-v6-u-mb-md">
              Getting Started
            </Content>
            <List>
              <ListItem>
                <strong>Navigate:</strong> Use the sidebar navigation to explore
                different metric categories
              </ListItem>
              <ListItem>
                <strong>Interact:</strong> Click on charts and tables to view
                detailed information
              </ListItem>
              <ListItem>
                <strong>Filter:</strong> Use the available filters to customize
                your data views
              </ListItem>
              <ListItem>
                <strong>Export:</strong> Download data and charts for reporting
                purposes
              </ListItem>
            </List>
          </GridItem>
          <GridItem span={12} md={6}>
            <Content component="h3" className="pf-v6-u-mb-md">
              Features
            </Content>
            <List>
              <ListItem>
                <strong>Real-time Data:</strong> Live updates with the latest
                metrics
              </ListItem>
              <ListItem>
                <strong>Interactive Charts:</strong> Multiple chart types with
                customization options
              </ListItem>
              <ListItem>
                <strong>Data Tables:</strong> Sortable and filterable data
                tables with pagination
              </ListItem>
              <ListItem>
                <strong>Responsive Design:</strong> Optimized for desktop and
                mobile devices
              </ListItem>
            </List>
          </GridItem>
        </Grid>
      </PageSection>
    </React.Fragment>
  );
};

export default HomePage;
