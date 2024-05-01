import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Article as ArticleType } from "@/types";

export default function Article({ article }: { article: ArticleType }) {
  return (
    <Card>
      <CardContent className="flex flex-col items-start gap-4">
        <Image
          alt="article 1"
          className="rounded-md w-full aspect-[16/9] object-cover mt-2"
          height={225}
          src={article.thumbnail}
          width={400}
        />
        <a
          href={article.url}
          target="_blank"
          rel="noreferrer"
          className="text-xl font-bold "
        >
          {article.title}
        </a>
        <p className="flex-1 text-xs font-medium text-gray-400 dark:text-gray-400">
          {article.description.slice(0, 120)}...
        </p>
      </CardContent>
    </Card>
  );
}
