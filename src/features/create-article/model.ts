"use server";

import { $api } from "@/config/api.config";
import { CreateArticleDto } from "./types";

export const createArticle = async (dto: CreateArticleDto) => {
  try {
    await $api.post("/article/create-article", dto);
  } catch (e: any) {
    console.error(e);
    throw new Error(e);
  }
};
