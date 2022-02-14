function getPage(totalItems, current) {
  let startPage, endPage;
  let totalPages = Math.ceil(totalItems / 20);

  if (current < 1) {
    current = 1;
  } else if (current > totalPages) {
    current = totalPages;
  }

  if (totalPages <= 5) {
    // less than 5 total pages so show all
    startPage = 1;
    endPage = totalPages;
  } else {
    // more than 5 total pages so calculate start and end pages
    if (current < 5) {
      startPage = 1;
      endPage = 5;
    } else if (current + 4 >= totalPages) {
      startPage = totalPages - 9;
      endPage = totalPages;
    } else {
      startPage = current - 2;
      endPage = current + 2;
    }
  }

  let pages = Array.from(new Array(endPage + 1 - startPage).keys()).map((i) => startPage + i);

  return {
    pages,
    currentPage: current || 1,
  };
}

export default getPage;
