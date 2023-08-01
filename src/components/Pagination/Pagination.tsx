import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import scss from './Pagination.module.scss';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { useMediaQuery } from 'react-responsive';
// Example items, to simulate fetching from another resources.
const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

interface ItemsProps {
  currentItems: number[];
}

const Items: React.FC<ItemsProps> = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item}>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
};

interface PaginatedItemsProps {
  itemsPerPage: number;
}

const PaginatedItems: React.FC<PaginatedItemsProps> = ({ itemsPerPage }) => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  //useMediaQuery
  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 768px)' });
  const pageRangeDisplayed = isTabletOrMobile ? 3 : 2;

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel={<GrNext value={{ color: 'blue' }} className={scss.next} />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={pageRangeDisplayed}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel={<GrPrevious className={scss.prev} />}
        renderOnZeroPageCount={null}
        className={scss.pagination}
        activeLinkClassName={scss.active}
      />
    </>
  );
};

export default PaginatedItems;
