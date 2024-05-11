'use sever'

import { API_URL } from "@/config";
import { NOW, NEWS_SENTIMENT, MOCK_GLOBAL_QUOTE, SYMBOL_SEARCH } from "./mocks";
import { NewsSentiment, SearchStocks, Stock } from "@/types";


function serializeSearchStocks(data: any): SearchStocks {
    return {
        symbol: data['1. symbol'],
        name: data['2. name'],
        type: data['3. type'],
        region: data['4. region'],
        marketOpen: data['5. marketOpen'],
        marketClose: data['6. marketClose'],
        timezone: data['7. timezone'],
        currency: data['8. currency'],
        matchScore: data['9. matchScore']
    };

};

export async function search(query = 'A'): Promise<SearchStocks[]> {
    const res = await fetch(`${API_URL}&function=SYMBOL_SEARCH&keywords=${query}`);
    const data = await res.json();
    const result = Array.isArray(data.bestMatches) ? data.bestMatches : SYMBOL_SEARCH['bestMatches'];
    return result.map((stock: { [x: string]: any; }) => serializeSearchStocks(stock));
}


function serialezeStock(data: any): Stock {
    return {
        symbol: data['01. symbol'],
        open: data['02. open'],
        high: data['03. high'],
        low: data['04. low'],
        price: data['05. price'],
        volume: data['06. volume'],
        latestTradingDay: data['07. latest trading day'],
        previousClose: data['08. previous close'],
        change: data['09. change'],
        changePercent: data['10. change percent'],
    };
}

export async function getStockBySymbol(symbol: string): Promise<Stock | undefined>{
    if (symbol) {
        const res = await fetch(`${API_URL}&function=GLOBAL_QUOTE&symbol=${symbol}`);
        const data = await res.json();
        if (data['Global Quote']) {
            return serialezeStock(data['Global Quote']);
        }
        return serialezeStock(MOCK_GLOBAL_QUOTE['Global Quote']);
    }
    return undefined;
}

const TIMEFRAME_MAP = {
    'NOW': {
        'function': 'TIME_SERIES_INTRADAY',
        'interval': 'Time Series (5min)',
    },
    '1D': {
        'function': 'TIME_SERIES_DAILY',
        'interval': 'Time Series (Daily)',
    },
    '1W': {
        'function': 'TIME_SERIES_WEEKLY',
        'interval': 'Weekly Time Series',
    },
    '1M': {
        'function': 'TIME_SERIES_MONTHLY',
        'interval': 'Monthly Time Series',
    },
};

export type Timeframe = keyof typeof TIMEFRAME_MAP;

function serializeTimeSeries(data: any[]): any {
    return Object.entries(data).map(([time, values]) => ({
        time: new Date(time).getTime(),
        open: parseFloat(values["1. open"]),
        high: parseFloat(values["2. high"]),
        low: parseFloat(values["3. low"]),
        close: parseFloat(values["4. close"]),
    })).reverse();
}

export async function getTimeSeries(symbol: string, timeframe: Timeframe = 'NOW' ): Promise<any> {
    
    if (symbol) {
        const timeframeCurrent = TIMEFRAME_MAP[timeframe] || TIMEFRAME_MAP['NOW'];
        const res = await fetch(`${API_URL}&function=${timeframeCurrent.function}&symbol=${symbol}`);
        const data = await res.json();
        if (data['Meta Data']) {
            return serializeTimeSeries(data[timeframeCurrent.interval]);
        }
        // @ts-ignore
        return serializeTimeSeries(NOW[`Time Series (5min)`]);
    }
    return [];
}

export async function getNewsSentiment(symbol = 'COIN,CRYPTO:BTC,FOREX:USD'): Promise<NewsSentiment> {
    const res = await fetch(`${API_URL}&function=NEWS_SENTIMENT&tickers=${symbol}&limit=20`);
    const data = await res.json();
    if (data.sentiment_score_definition) {
        return data as NewsSentiment;
    }
    return NEWS_SENTIMENT;
}