"use server";
import { $api } from "@/config/api.config";

import { GetArticlesDto, GetArticlesRes } from "./types";

export const getArticles = async (
  dto: GetArticlesDto
): Promise<GetArticlesRes> => {
  try {
    const { data } = await $api.get<GetArticlesRes>("/article/get-articles", {
      params: dto,
    });

    return data;
  } catch (e: any) {
    console.error(e);
    throw new Error(e);
  }
};
