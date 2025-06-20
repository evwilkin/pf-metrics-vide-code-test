import React, { useState, useMemo } from 'react';
import {
  Pagination,
  Checkbox,
  Card,
  CardTitle,
  CardBody,
} from '@patternfly/react-core';

import { Table, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';

const SampleTable = ({ title, data, columns }) => {
  const [sortBy, setSortBy] = useState({});
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const onSort = (event, index, direction) => {
    setSortBy({
      index,
      direction,
    });
  };

  const sortedData = useMemo(() => {
    if (!sortBy.index && sortBy.index !== 0) return data;

    const sorted = [...data].sort((a, b) => {
      const aValue = a[columns[sortBy.index].key];
      const bValue = b[columns[sortBy.index].key];

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortBy.direction === 'asc' ? aValue - bValue : bValue - aValue;
      }

      const aStr = String(aValue).toLowerCase();
      const bStr = String(bValue).toLowerCase();

      if (sortBy.direction === 'asc') {
        return aStr < bStr ? -1 : aStr > bStr ? 1 : 0;
      } else {
        return aStr > bStr ? -1 : aStr < bStr ? 1 : 0;
      }
    });

    return sorted;
  }, [data, sortBy, columns]);

  const paginatedData = useMemo(() => {
    const startIndex = (page - 1) * perPage;
    return sortedData.slice(startIndex, startIndex + perPage);
  }, [sortedData, page, perPage]);

  const handleSelectAll = (event, isChecked) => {
    if (isChecked) {
      setSelectedItems(new Set(data.map((item) => item.id)));
    } else {
      setSelectedItems(new Set());
    }
  };

  const handleSelectItem = (itemId) => (event, isChecked) => {
    const newSelection = new Set(selectedItems);
    if (isChecked) {
      newSelection.add(itemId);
    } else {
      newSelection.delete(itemId);
    }
    setSelectedItems(newSelection);
  };

  const isAllSelected = selectedItems.size === data.length && data.length > 0;
  const isPartiallySelected =
    selectedItems.size > 0 && selectedItems.size < data.length;

  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardBody>
        <Table aria-label={title}>
          <Thead>
            <Tr>
              <Th>
                <Checkbox
                  id={`${title.replace(/\s+/g, '-').toLowerCase()}-select-all`}
                  isChecked={
                    isAllSelected ? true : isPartiallySelected ? null : false
                  }
                  onChange={handleSelectAll}
                  aria-label="Select all rows"
                />
              </Th>
              {columns.map((column, index) => (
                <Th
                  key={column.key}
                  sort={{
                    sortBy,
                    onSort,
                    columnIndex: index,
                  }}
                >
                  {column.title}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {paginatedData.map((row) => (
              <Tr key={row.id}>
                <Td>
                  <Checkbox
                    id={`${title.replace(/\s+/g, '-').toLowerCase()}-row-${
                      row.id
                    }`}
                    isChecked={selectedItems.has(row.id)}
                    onChange={handleSelectItem(row.id)}
                    aria-label={`Select row ${row.id}`}
                  />
                </Td>
                {columns.map((column) => (
                  <Td key={column.key}>{row[column.key]}</Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>

        <Pagination
          itemCount={data.length}
          perPage={perPage}
          page={page}
          onSetPage={(event, newPage) => setPage(newPage)}
          onPerPageSelect={(event, newPerPage) => {
            setPerPage(newPerPage);
            setPage(1);
          }}
          widgetId="sample-table-pagination"
          isCompact
        />
      </CardBody>
    </Card>
  );
};

export default SampleTable;
