"use client";

import { FC, useState } from "react";
import { CreateCommentDto, CreateCommentProps } from "./types";
import { Form } from "@/shared/components/form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TextArea } from "@/shared/components/textarea";
import { Button } from "@/shared/components/button";
import { Input } from "@/shared/components/input";
import { createComment } from "./model";

export const CreateComment: FC<CreateCommentProps> = ({ article_id }) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const { mutateAsync } = useMutation({
    mutationKey: ["create-article"],
    mutationFn: async (dto: CreateCommentDto) => createComment(dto),
  });
  const queryClient = useQueryClient();
  const handleSubmit = async () => {
    await mutateAsync({ title, content, article_id });
    await queryClient.refetchQueries({
      queryKey: [`get-article-${article_id}-comments`],
    });
  };

  return (
    <Form>
      <h3>Написать коммент</h3>
      <Input
        value={title}
        placeholder="Заголовок"
        onChange={(e) => setTitle(e?.target?.value)}
        style={{ color: "blue" }}
      />
      <TextArea
        value={content}
        placeholder="Текст"
        onChange={(e) => setContent(e?.target?.value)}
        style={{ color: "blue" }}
      />
      <Button
        disabled={!title || !content}
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        Отправить
      </Button>
    </Form>
  );
};
