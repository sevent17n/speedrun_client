"use server";
import { $api } from "@/config/api.config";

import { GetArticleCommentsDto, GetArticleCommentsRes } from "./types";

export const getArticleComments = async (
  dto: GetArticleCommentsDto
): Promise<GetArticleCommentsRes> => {
  try {
    const { data } = await $api.get("/comment/get-comments", { params: dto });
    return data;
  } catch (e: any) {
    console.error(e);
    throw new Error(e);
  }
};
