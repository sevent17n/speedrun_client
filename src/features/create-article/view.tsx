"use client";

import { Button } from "@/shared/components/button";
import { Form } from "@/shared/components/form";
import { Input } from "@/shared/components/input";
import { TextArea } from "@/shared/components/textarea";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FC, useState } from "react";
import { createArticle } from "./model";
import { CreateArticleDto } from "./types";

export const CreateArticle: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const { mutateAsync } = useMutation({
    mutationKey: ["create-article"],
    mutationFn: async (dto: CreateArticleDto) => createArticle(dto),
  });
  const queryClient = useQueryClient();
  const handleSubmit = async () => {
    await mutateAsync({ title, content });
    await queryClient.refetchQueries({ queryKey: ["get-article-list"] });
  };

  return (
    <Form>
      <h3>Создать статью</h3>
      <Input
        value={title}
        placeholder="Заголовок"
        onChange={(e) => setTitle(e?.target?.value)}
      />
      <TextArea
        value={content}
        placeholder="Текст"
        onChange={(e) => setContent(e?.target?.value)}
      />
      <Button
        disabled={!title || !content}
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        Создать
      </Button>
    </Form>
  );
};
