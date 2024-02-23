import { Article } from "@/shared/types/article/types";
import { Comment } from "@/shared/types/comment";

export interface ArticleModalProps {
  open: boolean;
  onClose: () => void;
  article: Article;
}

export interface GetArticleCommentsDto {
  page: number;
  limit: number;
  article_id: number;
}

export interface GetArticleCommentsRes {
  pagination: {
    totalItems: number;
    totalPages: number;
    page: number;
    limit: number;
  };
  items: Comment[];
}
