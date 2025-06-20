import React, { useState, useEffect, useRef } from 'react';
import {
  ChartDonut,
  ChartLine,
  ChartBar,
  ChartTooltip,
  ChartLegend,
} from '@patternfly/react-charts/victory';
import {
  Card,
  CardTitle,
  CardBody,
  Select,
  SelectOption,
  MenuToggle,
  MenuToggleElement,
} from '@patternfly/react-core';

const SampleChart = ({ title, data, type = 'donut' }) => {
  const [dimensions, setDimensions] = useState({ width: 400, height: 300 });
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(type);
  const containerRef = useRef(null);

  // PatternFly chart color tokens that work in both themes
  const chartColors = [
    '#06c', // Blue
    '#3e8635', // Green
    '#f0ab00', // Orange
    '#c9190b', // Red
    '#8476d1', // Purple
    '#009596', // Cyan
    '#f4c145', // Gold
    '#7d1007', // Dark red
  ];

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        setDimensions({
          width: Math.max(width - 40, 300),
          height: 300,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const onSelectToggle = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const onSelectChart = (event, value) => {
    setSelectedType(value);
    setIsSelectOpen(false);
  };

  const renderChart = () => {
    const chartProps = {
      data,
      width: dimensions.width,
      height: dimensions.height,
      colorScale: chartColors,
      ariaDesc: `${title} ${selectedType} chart`,
      ariaTitle: title,
      tabIndex: 0,
      role: 'img',
      padding: { left: 80, top: 20, right: 80, bottom: 60 },
    };

    switch (selectedType) {
      case 'donut':
        return (
          <ChartDonut
            {...chartProps}
            innerRadius={50}
            padAngle={3}
            legendData={data.map((item) => ({ name: item.x }))}
            legendOrientation="vertical"
            legendPosition="right"
            constrainToVisibleArea={true}
            labelComponent={<ChartTooltip />}
          />
        );
      case 'line':
        return (
          <div>
            <ChartLine
              {...chartProps}
              height={dimensions.height - 60}
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 },
              }}
              labelComponent={<ChartTooltip />}
            />
            <ChartLegend
              data={[{ name: 'Value' }]}
              orientation="horizontal"
              gutter={20}
              height={40}
              width={dimensions.width}
              colorScale={chartColors}
            />
          </div>
        );
      case 'bar':
        return (
          <div>
            <ChartBar
              {...chartProps}
              height={dimensions.height - 60}
              domainPadding={{ x: 20 }}
              animate={{
                duration: 1000,
                onLoad: { duration: 500 },
              }}
              labelComponent={<ChartTooltip />}
            />
            <ChartLegend
              data={[{ name: 'Value' }]}
              orientation="horizontal"
              gutter={20}
              height={40}
              width={dimensions.width}
              colorScale={chartColors}
            />
          </div>
        );
      default:
        return null;
    }
  };

  const toggle = (toggleRef) => (
    <MenuToggle
      ref={toggleRef}
      onClick={onSelectToggle}
      isExpanded={isSelectOpen}
    >
      {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)} Chart
    </MenuToggle>
  );

  return (
    <Card>
      <CardTitle>
        <div className="pf-v6-u-display-flex pf-v6-u-justify-content-space-between pf-v6-u-align-items-center pf-v6-u-gap-md">
          <span className="pf-v6-u-flex-grow-1">{title}</span>
          <Select
            isOpen={isSelectOpen}
            selected={selectedType}
            onSelect={onSelectChart}
            onOpenChange={setIsSelectOpen}
            toggle={toggle}
          >
            <SelectOption value="donut">Donut Chart</SelectOption>
            <SelectOption value="line">Line Chart</SelectOption>
            <SelectOption value="bar">Bar Chart</SelectOption>
          </Select>
        </div>
      </CardTitle>
      <CardBody>
        <div ref={containerRef} className="pf-v6-u-text-align-center">
          {renderChart()}
        </div>
      </CardBody>
    </Card>
  );
};

export default SampleChart;
