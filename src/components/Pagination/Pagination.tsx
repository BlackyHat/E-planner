import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useAppSelector } from '../../redux/hooks';
import { selectFilteredEvents } from '../../redux/events/eventSelectors';
import ReactPaginate from 'react-paginate';

import EventList from '../EventList/EventList';
import { GrNext, GrPrevious } from 'react-icons/gr';
import scss from './Pagination.module.scss';

interface PaginatedItemsProps {
  itemsPerPage: number;
}

const PaginatedItems: React.FC<PaginatedItemsProps> = ({
  itemsPerPage = 4,
}) => {
  const items = useAppSelector(selectFilteredEvents);
  const [_, setSearchParams] = useSearchParams();
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const pageNumber = Math.ceil((itemOffset + itemsPerPage) / itemsPerPage);
    setSearchParams({ page: pageNumber.toString() });
  }, [itemOffset]);

  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 768px)' });
  const pageRangeDisplayed = isTabletOrMobile ? 3 : 2;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <EventList events={currentItems} />
      {items.length > itemsPerPage && (
        <ReactPaginate
          breakLabel="..."
          nextLabel={<GrNext className={scss.next} />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={pageRangeDisplayed}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel={<GrPrevious className={scss.prev} />}
          renderOnZeroPageCount={null}
          className={scss.pagination}
          activeLinkClassName={scss.active}
          disabledClassName={scss.disabled}
        />
      )}
    </>
  );
};

export default PaginatedItems;
