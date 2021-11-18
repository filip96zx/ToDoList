import React from "react";
import { PageItem, PaginationStyled } from "./Pagination.style";

const Pagination = ({
  pageIndex,
  pageSize,
  pageSizes,
  itemCount,
  switchPage,
  switchIndex,
}) => {
  let pages = [];
  for (let i = 0; i < itemCount / pageSize; i++) {
    pages.push(
      <PageItem
        currentPage={pageIndex === i}
        key={i}
        onClick={() => switchPage(i)}
      >
        {i + 1}
      </PageItem>
    );
  }

  const displayPageItems = (itemsBeforeAfter) => {
    let endIndex, startIndex;
    let result = [];
    startIndex = pageIndex - itemsBeforeAfter;
    endIndex = pageIndex + itemsBeforeAfter + 1;
    if (startIndex < 0) {
      startIndex = 0;
      endIndex = 1 + 2 * itemsBeforeAfter;
      if (endIndex > pages.length) endIndex = pages.length;
    }
    if (endIndex > pages.length) {
      startIndex = pages.length - 2 * itemsBeforeAfter;
      endIndex = pages.length;
      if (startIndex < 0) startIndex = 0;
    }
    if (startIndex > 0)
      result.push(
        <PageItem key={0} onClick={() => switchPage(0)}>
          1
        </PageItem>,
        <PageItem key={-1} style={{ cursor: "default" }}>
          ...
        </PageItem>
      );
    result.push(...pages.slice(startIndex, endIndex));
    if (endIndex < pages.length)
      result.push(
        <PageItem key={-2} style={{ cursor: "default" }}>
          ...
        </PageItem>,
        <PageItem key={pages.length - 1} onClick={() => switchPage(pages.length - 1)}>
          {pages.length}
        </PageItem>
      );
    return result;
  };

  return (
    <PaginationStyled>
      {displayPageItems(2)}
      <select value={pageSize} onChange={switchIndex}>
        {pageSizes.map((size) => (
          <option key={size} value={size}>{size}</option>
        ))}
      </select>
    </PaginationStyled>
  );
};

export default Pagination;
