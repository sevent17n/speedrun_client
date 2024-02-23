"use server";
import { $api } from "@/config/api.config";

import { CreateCommentDto } from "./types";

export const createComment = async (dto: CreateCommentDto) => {
  try {
    await $api.post("/comment/create-comment", dto);
  } catch (e: any) {
    console.error(e);
    throw new Error(e);
  }
};
