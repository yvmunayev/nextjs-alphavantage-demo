import { Stock } from "@/types";

type StockInfoProps = {
    stock?: Stock;
};

export const StockInfo: React.FC<StockInfoProps> = async ({ stock}) => {
    if (!stock) return null;
    return (
        <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="flex-1 md:border-r md:pr-4">
                <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Open</span>
                    <span>{stock?.open}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">High</span>
                    <span>{stock?.high}</span>
                </div>
            </div>
            <div className="flex-1 md:border-r md:pr-4">
                <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Low</span>
                    <span>{stock?.low}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Volume</span>
                    <span>{stock?.volume}</span>
                </div>
            </div>
            <div className="flex-1 md:border-r md:pr-4">
                <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">LTD</span>
                    <span>{stock?.latestTradingDay}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Previous Close</span>
                    <span>{stock?.previousClose}</span>
                </div>
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Change</span>
                    <span>{stock?.change}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Change Percent</span>
                    <span>{stock?.changePercent}</span>
                </div>
            </div>
        </div>
    );
}