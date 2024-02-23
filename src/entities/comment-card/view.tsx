import { FC, useState } from "react";
import { CommentCardProps, DeleteCommentDto, EditCommentDto } from "./types";
import { formatDate } from "@/shared/utils/formatDate/util";
import { Button } from "@/shared/components/button";
import styles from "./styles.module.scss";
import { Input } from "@/shared/components/input";
import { TextArea } from "@/shared/components/textarea";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteComment, updateComment } from "./model";

export const CommentCard: FC<CommentCardProps> = ({ comment }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(comment.title);
  const [content, setContent] = useState(comment.content);
  const queryClient = useQueryClient();

  const refreshList = async () => {
    await queryClient.refetchQueries({
      queryKey: [`get-article-${comment.article_id}-comments`],
    });
  };

  const { mutateAsync: editComment } = useMutation({
    mutationKey: ["edit-comment"],
    mutationFn: async (dto: EditCommentDto) => await updateComment(dto),
  });

  const { mutateAsync: delComment } = useMutation({
    mutationKey: ["delete-comment"],
    mutationFn: async (dto: DeleteCommentDto) => await deleteComment(dto),
  });

  return (
    <div className={styles.card}>
      {isEditing ? (
        <div className="flex flex-col">
          <Input value={title} onChange={(e) => setTitle(e?.target?.value)} />
          <TextArea
            value={content}
            onChange={(e) => setContent(e?.target?.value)}
          />
        </div>
      ) : (
        <div>
          <h3>{comment.title}</h3>
          <p>{comment.content}</p>
        </div>
      )}

      <p>От: {formatDate(comment.createdAt)}</p>
      <div className="flex gap-2 mt-5">
        <Button onClick={() => setIsEditing((prev) => !prev)}>
          {isEditing ? "Отмена" : "Изменить"}
        </Button>
        {isEditing ? (
          <Button
            onClick={async () => {
              await editComment({
                title,
                comment_id: Number(comment.id),
                content,
              });
              await refreshList();
              setIsEditing(false);
            }}
          >
            Сохранить
          </Button>
        ) : (
          <Button
            onClick={async () => {
              await delComment({ comment_id: comment?.id });
              await refreshList();
            }}
          >
            Удалить
          </Button>
        )}
      </div>
    </div>
  );
};
