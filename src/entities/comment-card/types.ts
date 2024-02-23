import { Comment } from "@/shared/types/comment";

export interface CommentCardProps {
  comment: Comment;
}

export interface DeleteCommentDto {
  comment_id: number;
}

export interface EditCommentDto {
  comment_id: number;
  title: string;
  content: string;
}
