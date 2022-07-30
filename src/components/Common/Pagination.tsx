import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "src/styles/pagination.css";

interface IProps {
  itemsPerPage: number;
  itemsLength: number;
  handlePageClick: (event: { selected: number }) => void;
}
const Pagination = ({ itemsPerPage, itemsLength, handlePageClick }: IProps) => {
  console.log({ itemsLength, itemsPerPage });
  const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    setPageCount(Math.ceil(itemsLength / itemsPerPage));
  }, []);

  useEffect(() => {
    console.log("這是pageCount", pageCount);
  }, [pageCount]);

  return (
    <>
      <ReactPaginate
        onPageChange={(num) => handlePageClick(num)}
        nextLabel=">"
        previousLabel="<"
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={30}
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
        renderOnZeroPageCount={() => console.log(pageCount)}
      />
    </>
  );
};

export default Pagination;
