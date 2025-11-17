interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    
    if (totalPages <= 5) {
      // Show all pages if 5 or less
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      if (currentPage > 3) {
        pages.push('...');
      }
      
      // Show current page and neighbors
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) {
          pages.push(i);
        }
      }
      
      if (currentPage < totalPages - 2) {
        pages.push('...');
      }
      
      // Always show last page
      if (!pages.includes(totalPages)) {
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex items-center justify-center mt-6">
      <div className="flex items-start overflow-clip rounded-lg">
        {/* Previous button */}
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="flex items-center gap-2 h-[38px] px-3 rounded-lg transition-colors hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="text-muted-foreground">«</span>
          <span className="text-muted-foreground">Anterior</span>
        </button>

        {/* Page numbers */}
        <div className="flex items-start">
          {pageNumbers.map((page, idx) => {
            if (page === '...') {
              return (
                <div
                  key={`ellipsis-${idx}`}
                  className="flex items-center justify-center size-[38px] rounded-lg"
                >
                  <p className="text-xs text-muted-foreground">•••</p>
                </div>
              );
            }

            const pageNum = page as number;
            const isActive = pageNum === currentPage;

            return (
              <button
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                className={`flex items-center justify-center size-[38px] rounded-lg transition-colors ${
                  isActive
                    ? 'bg-muted text-foreground'
                    : 'text-muted-foreground hover:bg-muted/50'
                }`}
              >
                <p className="text-center whitespace-nowrap tracking-[0.08px]">
                  {pageNum}
                </p>
              </button>
            );
          })}
        </div>

        {/* Next button */}
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="flex items-center gap-2 h-[38px] px-3 rounded-lg transition-colors hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="text-muted-foreground">Siguiente</span>
          <span className="text-muted-foreground">»</span>
        </button>
      </div>
    </div>
  );
}
