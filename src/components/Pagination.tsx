import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <nav
      aria-label="Policy pagination"
      className="flex items-center justify-center gap-4 mt-10"
    >
      {/* Previous */}
      <button
        type="button"
        aria-label="Previous page"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="
          flex items-center justify-center
          disabled:opacity-40
          disabled:cursor-not-allowed
          focus-visible:outline-2
          focus-visible:outline-offset-2
          focus-visible:outline-blue-600
        "
      >
        <ChevronLeft size={20} />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-3">
        {pages.map((page) => (
          <button
            key={page}
            type="button"
            aria-current={
              currentPage === page ? "page" : undefined
            }
            onClick={() => onPageChange(page)}
            className={`
              h-12 w-12 rounded-full border
              transition-colors duration-200
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-blue-600

              ${
                currentPage === page
                  ? "bg-blue-600 text-white border-black"
                  : "bg-white text-black border-black hover:bg-slate-100"
              }
            `}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next */}
      <button
        type="button"
        aria-label="Next page"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="
          flex items-center justify-center
          disabled:opacity-40
          disabled:cursor-not-allowed
          focus-visible:outline-2
          focus-visible:outline-offset-2
          focus-visible:outline-blue-600
        "
      >
        <ChevronRight size={20} />
      </button>
    </nav>
  );
};

export default Pagination;