import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Page,
  PageSidebar,
  PageSidebarBody,
  Masthead,
  MastheadMain,
  MastheadBrand,
  Content,
  Nav,
  NavList,
  NavItem,
  NavExpandable,
  PageToggleButton,
} from '@patternfly/react-core';
import { BarsIcon } from '@patternfly/react-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import ThemeToggle from './components/ThemeToggle';

// Import page components
import HomePage from './pages/HomePage';
import WebPage from './pages/WebPage';
import ComponentPage from './pages/ComponentPage';
import ProductPage from './pages/ProductPage';
import SearchPage from './pages/SearchPage';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const onSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const onNavSelect = (event, result) => {
    navigate(result.itemId || result.to);
  };

  const Header = (
    <Masthead>
      <MastheadMain>
        <PageToggleButton
          variant="plain"
          aria-label="Global navigation"
          isSidebarOpen={isSidebarOpen}
          onSidebarToggle={onSidebarToggle}
          id="main-nav-toggle"
        >
          <BarsIcon />
        </PageToggleButton>
        <MastheadBrand
          onClick={() => navigate('/')}
          className="pf-v6-u-flex-shrink-1 pf-v6-u-min-width-0"
        >
          <Content
            component="h1"
            className="pf-v6-u-color-light-100 pf-v6-u-text-truncate"
          >
            Metrics Dashboard
          </Content>
        </MastheadBrand>
        <div className="pf-v6-u-flex-shrink-0 pf-v6-u-ml-auto">
          <ThemeToggle />
        </div>
      </MastheadMain>
    </Masthead>
  );

  const Navigation = (
    <Nav onSelect={onNavSelect} aria-label="Main navigation">
      <NavList>
        <NavItem
          itemId="/"
          isActive={location.pathname === '/'}
          onClick={() => navigate('/')}
        >
          Home
        </NavItem>
        <NavExpandable
          title="Metrics"
          isActive={['/web', '/component', '/product', '/search'].includes(
            location.pathname
          )}
          isExpanded={['/web', '/component', '/product', '/search'].includes(
            location.pathname
          )}
        >
          <NavItem
            itemId="/web"
            isActive={location.pathname === '/web'}
            onClick={() => navigate('/web')}
          >
            Web
          </NavItem>
          <NavItem
            itemId="/component"
            isActive={location.pathname === '/component'}
            onClick={() => navigate('/component')}
          >
            Component
          </NavItem>
          <NavItem
            itemId="/product"
            isActive={location.pathname === '/product'}
            onClick={() => navigate('/product')}
          >
            Product
          </NavItem>
          <NavItem
            itemId="/search"
            isActive={location.pathname === '/search'}
            onClick={() => navigate('/search')}
          >
            Search
          </NavItem>
        </NavExpandable>
      </NavList>
    </Nav>
  );

  const Sidebar = (
    <PageSidebar isSidebarOpen={isSidebarOpen}>
      <PageSidebarBody>{Navigation}</PageSidebarBody>
    </PageSidebar>
  );

  return (
    <Page masthead={Header} sidebar={Sidebar} isManagedSidebar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/web" element={<WebPage />} />
        <Route path="/component" element={<ComponentPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Page>
  );
};

export default App;
