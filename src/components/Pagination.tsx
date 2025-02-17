import type { FC } from "react";

const { VITE_PAGE_LIMIT } = import.meta.env;

interface PaginationProps {
  count: number;
  skip: number;
  limit?: number;
  onPageChange: (newSkip: number) => void;
}

export const Pagination: FC<PaginationProps> = ({
  count,
  skip,
  limit = VITE_PAGE_LIMIT || 10,
  onPageChange,
}) => {
  const maxVisiblePages = 5;
  const totalPages = Math.ceil(count / limit);
  const currentPage = Math.floor(skip / limit) + 1;

  const handlePageChange = (page: number) => {
    const newSkip = (page - 1) * limit;
    onPageChange(newSkip);
  };

  const pageNumbers: number[] = [];

  let startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center gap-2 mt-4">
      <button
        type="button"
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        First
      </button>

      <button
        type="button"
        onClick={() => onPageChange(skip - limit)}
        disabled={skip <= 0}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Prev
      </button>

      {pageNumbers.map((page) => (
        <button
          type="button"
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-3 py-1 border rounded ${
            page === currentPage
              ? "bg-blue-600 text-white font-bold shadow-md"
              : "bg-white hover:bg-gray-200"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onPageChange(skip + limit)}
        disabled={skip + limit >= count}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Next
      </button>

      <button
        type="button"
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Last
      </button>
    </div>
  );
};
