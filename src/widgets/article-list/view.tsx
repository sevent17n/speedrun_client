"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getArticles } from "./model";
import { ArticleCard } from "@/entities/article-card";
import { Pagination } from "@/features/pagination";

export const ArticleList = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["get-article-list"],
    queryFn: async () => await getArticles({ page, limit: 20 }),
  });

  if (isLoading) return <h1>Загрузка</h1>;

  return (
    <div>
      {data?.items?.map((article) => (
        <ArticleCard key={article?.id} article={article} />
      ))}
      {data?.pagination && (
        <Pagination
          minPage={1}
          maxPage={data?.pagination?.totalPages}
          page={page}
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
    </div>
  );
};
