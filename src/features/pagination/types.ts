export interface PaginationProps {
  onNextPage: () => void;
  onPrevPage: () => void;
  page: number;
  minPage: number;
  maxPage: number;
}
