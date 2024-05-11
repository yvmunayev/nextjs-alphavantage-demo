export type NewsSentimentTopic = {
    topic: string;
    relevance_score: string;
}

export type NewsSentimentTicker = {
    ticker: string;
    relevance_score: string;
    ticker_sentiment_score: string;
    ticker_sentiment_label: string;
}

export type NewsSentimentFeed = {
    title: string;
    url: string;
    time_published: string;
    authors: string[];
    summary: string;
    banner_image: string | null;
    source: string;
    category_within_source: string;
    source_domain: string;
    topics: NewsSentimentTopic[];
    overall_sentiment_score: number;
    overall_sentiment_label: string;
    ticker_sentiment: NewsSentimentTicker[];
}

export type NewsSentiment = {
    items: string;
    sentiment_score_definition: string;
    relevance_score_definition: string;
    feed: NewsSentimentFeed[];
}

export type Stock = {
    symbol: string,
    open: string,
    high: string,
    low: string,
    price: string,
    volume: string,
    latestTradingDay: string,
    previousClose: string,
    change: string,
    changePercent: string,
}

export type SearchStocks = {
    symbol: string,
    name: string,
    type: string,
    region: string,
    marketOpen: string,
    marketClose: string,
    timezone: string,
    currency: string,
    matchScore: string,
}