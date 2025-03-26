import React from "react";
import Image from "next/image";
import { Article } from "../interfaces";
import { Card, CardContent } from "@/components/ui/card";

interface ArticleCardProps {
	article: Article;
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
	return (
		<Card className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
			<div className="relative aspect-video w-full">
				<Image
					src={article.urlToImage}
					alt="article image"
					fill
					className="object-cover"
					aria-hidden="true"
				/>
			</div>
			<CardContent className="p-4">
				<h2 className="text-lg font-semibold line-clamp-2 mb-2">
					{article.title}
				</h2>
				<p className="text-sm text-gray-600">By {article.author}</p>
			</CardContent>
		</Card>
	);
};
