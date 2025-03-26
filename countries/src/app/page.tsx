import React from "react";
import { Article } from "./interfaces";
import { ArticleCard } from "./components/ArticleCard";

interface NewsProps {
	articles: Article[];
	error: string;
}

const Home = ({ articles, error }: NewsProps) => {
	if (error) {
		return <div>Error fetching the news: {error}</div>;
	}

	return (
		<div>
			<h1 className="font-bold">Even Better</h1>
			{articles.map((article: Article) => (
				<ArticleCard key={article.title} article={article} />
			))}
		</div>
	);
};

export async function getServerSideProps() {
	const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
	const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error("Failed to fetch news");
		}

		const data = await response.json();

		return {
			props: {
				articles: data.articles,
			},
		};
	} catch (error) {
		return {
			props: {
				error: error.message,
			},
		};
	}
}

export default Home;
