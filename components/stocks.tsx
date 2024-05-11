'use client'

import Link from "next/link";
import React, { useContext } from "react";
import { SheetLeftContext } from "@/components/sheet-left";
import { cn } from "@/lib/utils";
import { SearchStocks } from "@/types";

type StockProps = {
    stocks: SearchStocks[];
    q?: string;
    symbol?: string;
};

export const Stocks: React.FC<StockProps> = ({ stocks, q, symbol }) => {
    const { setOpen } = useContext(SheetLeftContext);
    return (
        <div className="grid gap-2 mt-2">
            {stocks.map(({ name, symbol: currentSymbol}) => (
                <Link
                    href={`?symbol=${currentSymbol}${q ? `&q=${q}` : ''}`}
                    className={cn("flex items-center gap-4 p-2 border rounded-sm bg-background hover:bg-slate-200 dark:hover:bg-slate-800", { "bg-slate-200 dark:bg-slate-800": currentSymbol === symbol})}
                    key={currentSymbol}
                    onClick={() => setOpen(false)}
                >
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">{currentSymbol}</p>
                        <p className="text-sm text-muted-foreground">{name}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}