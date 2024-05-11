import { Timeframe as TimeframeType, getStockBySymbol, getTimeSeries } from "@/actions/stock";
import { cn } from "@/lib/utils";
import { LightweightCharts } from "@/components/ui/lightweight-charts";
import { News } from "@/components/news";
import { StockInfo } from "@/components/stock-info";
import { Timeframe } from "@/components/timeframe";
import { SearchStocks } from "@/types";

type StockProps = {
    seachStock?: SearchStocks;
    timeframe?: string;
};

export const Stock: React.FC<StockProps> = async ({ seachStock, timeframe}) => {
    if (!seachStock) return null;
    const { symbol, name, region, currency } = seachStock;
    const stock = await getStockBySymbol(symbol);
    const series = await getTimeSeries(symbol, timeframe as TimeframeType);

    return (
        <div className="flex flex-col gap-2 p-4">
            <div className="flex w-full justify-between items-center border-b">
                <div>
                    <div className="flex items-end gap-2">
                        <h1 className="text-2xl font-semibold leading-[1.5rem]">{symbol}</h1>
                        <p className="text-sm text-muted-foreground">{name}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{region} - {currency}</p>
                </div>
                <div className="flex gap-2">
                    <span className="text-sm">{stock?.price}</span>
                    <span className={cn("text-sm text-red-600", {"text-green-600" : stock?.change.startsWith('+')})}>{stock?.change}</span>
                </div>
            </div>
            <div className="flex justify-start">
                <Timeframe timeframe={timeframe} />
            </div>
            <LightweightCharts data={series} />
            <StockInfo stock={stock} />
            <hr className="border-t" />
            <News symbol={symbol} />
        </div>
    );
}