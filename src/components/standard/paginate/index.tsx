import React, { memo } from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import ReactPaginate from "react-paginate";

interface Props {
  pageRangeDisplayed?: number;
  pageCount: number;
  handlePageClick?: any;
}
const Pagination: React.FC<Props> = ({
  pageRangeDisplayed,
  pageCount,
  handlePageClick,
}) => {
  return (
    <div className="w-fit">
      <ReactPaginate
        breakLabel="..."
        className="flex gap-2 items-center"
        onPageChange={handlePageClick}
        initialPage={0}
        pageRangeDisplayed={pageRangeDisplayed || 10}
        pageCount={pageCount || 0}
        pageClassName="bg-white rounded-5 w-9 h-9 grid place-items-center text-secondary border border-secondary font-bold"
        activeClassName="shadow-primaryShadow bg-primary !border !border-primary"
        activeLinkClassName="text-white"
        previousLabel={
          <div className="shadow-tertiaryShadow rounded-5 text-primary w-fit p-2 group border border-primary">
            <HiArrowNarrowLeft className="text-primary filter drop-shadow-primaryShadow" />
          </div>
        }
        nextLabel={
          <div className="shadow-tertiaryShadow rounded-5 text-primary w-fit p-2 group border border-primary">
            <HiArrowNarrowRight className="text-primary filter drop-shadow-primaryShadow" />
          </div>
        }
      />
    </div>
  );
};

export default memo(Pagination);
