"use server";

import { $api } from "@/config/api.config";
import { DeleteCommentDto, EditCommentDto } from "./types";

export const updateComment = async (dto: EditCommentDto) => {
  try {
    await $api.patch("/comment/update-comment", dto);
  } catch (e: any) {
    console.error(e);
    throw new Error(e);
  }
};

export const deleteComment = async (dto: DeleteCommentDto) => {
  try {
    await $api.delete("/comment/delete-comment", { params: dto });
  } catch (e: any) {
    console.error(e);
    throw new Error(e);
  }
};
