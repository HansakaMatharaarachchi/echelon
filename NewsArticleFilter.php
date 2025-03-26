<?php

$articles = require_once 'articles.php';

// By default the filter category is 'Business'
function filterArticlesByCategory(array $articles, string $category = 'Business'): array
{

  $filteredArticles = array_filter($articles, function ($article) use ($category) {
    return isset($article['category']) && $article['category'] === $category;
  });

  usort($filteredArticles, function ($article1, $article2) {
    return isset($article1['published_date'], $article2['published_date'])
      ? strtotime($article2['published_date']) <=> strtotime($article1['published_date'])
      : 0;
  });

  return $filteredArticles;
}

$filtered = filterArticlesByCategory($articles);

print_r($filtered);
