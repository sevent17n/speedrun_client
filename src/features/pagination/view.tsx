import { Button } from "@/shared/components/button";
import { FC } from "react";
import { PaginationProps } from "./types";

export const Pagination: FC<PaginationProps> = ({
  page,
  maxPage,
  minPage,
  onPrevPage,
  onNextPage,
}) => {
  return (
    <div className="flex justify-between items-center">
      <Button disabled={minPage === page} onClick={onPrevPage}>
        Назад
      </Button>
      <h3>Текущая страница {page}</h3>
      <Button disabled={maxPage === page} onClick={onNextPage}>
        Вперед
      </Button>
    </div>
  );
};
