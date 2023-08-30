import { NEWS_API_KEY, endpoint, country } from "../config/config";

export async function services(category = "general") {
	let articles = await fetch(
		`${endpoint}?country=${country}&category=${category}`,
		{
			headers: {
				"X-API-KEY": NEWS_API_KEY,
			},
		}
	);

	let result = await articles.json();
	articles = null;

	return result.articles;
}
