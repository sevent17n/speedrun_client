import { FC, memo, useCallback, useState } from "react";
import { ArticleCardProps } from "./types";
import { formatDate } from "@/shared/utils/formatDate/util";
import { Article } from "@/shared/types/article/types";
import { ArticleModal } from "../article-modal";

export const ArticleCard: FC<ArticleCardProps> = memo(({ article }) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClick = useCallback(
    (article: Article) => {
      setSelectedArticle(article);
      setIsOpen(true);
    },
    [setSelectedArticle, setIsOpen]
  );

  return (
    <>
      <div onClick={() => onClick(article)}>
        <h1>{article.title}</h1>
        <p>От: {formatDate(article.createdAt)}</p>
      </div>
      {selectedArticle && (
        <ArticleModal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          article={selectedArticle}
        />
      )}
    </>
  );
});

ArticleCard.displayName = "ArticleCard";
