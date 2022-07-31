import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "src/styles/pagination.css";

interface IProps {
  itemsPerPage: number;
  itemsLength: number;
  handlePageClick: (event: { selected: number }) => void;
}
const Pagination = ({ itemsPerPage, itemsLength, handlePageClick }: IProps) => {
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(itemsLength / itemsPerPage));
  }, [itemsLength]);

  return (
    <>
      <ReactPaginate
        onPageChange={(num) => handlePageClick(num)}
        nextLabel=">"
        previousLabel="<"
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="prev"
        nextClassName="page-item"
        nextLinkClassName="next"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null as any}
      />
    </>
  );
};

export default Pagination;
