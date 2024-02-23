"use client";
import { Modal } from "@/shared/components/modal";
import { FC, useState } from "react";
import { ArticleModalProps } from "./types";
import { CreateComment } from "@/features/create-comment/view";
import { useQuery } from "@tanstack/react-query";
import { getArticleComments } from "./model";
import { CommentCard } from "../comment-card/view";
import { Pagination } from "@/features/pagination";

export const ArticleModal: FC<ArticleModalProps> = ({
  article,
  open,
  onClose,
}) => {
  const [page, setPage] = useState(1);

  const { data, isLoading, refetch } = useQuery({
    queryKey: [`get-article-${article.id}-comments`],
    queryFn: async () =>
      getArticleComments({ page, limit: 20, article_id: Number(article.id) }),
  });

  return (
    <Modal open={open} onClose={onClose}>
      <p>{article.content}</p>
      <CreateComment article_id={Number(article.id)} />
      <h1>Комментарии</h1>
      {isLoading
        ? "Загрузка..."
        : data?.items?.map((comment) => (
            <CommentCard key={comment?.id} comment={comment} />
          ))}
      {data?.pagination && (
        <Pagination
          page={page}
          minPage={1}
          maxPage={data?.pagination?.totalPages}
          onNextPage={() => {
            setPage((page) => page + 1);
            refetch();
          }}
          onPrevPage={() => {
            setPage((page) => page - 1);
            refetch();
          }}
        />
      )}
    </Modal>
  );
};
