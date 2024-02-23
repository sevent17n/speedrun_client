import { Article } from "@/shared/types/article/types";

export interface GetArticlesDto {
  page: number;
  limit: number;
}

export interface GetArticlesRes {
  pagination: {
    totalItems: number;
    totalPages: number;
    page: number;
    limit: number;
  };
  items: Article[];
}
