'use client'

import { createChart, ColorType } from 'lightweight-charts';
import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';


type LightweightChartsProps = {
    data: any;
    colors?: {
        backgroundColor?: string;
        lineColor?: string;
        textColor?: string;
        areaTopColor?: string;
        areaBottomColor?: string;
    };
};


export const LightweightCharts: React.FC<LightweightChartsProps> = ({ data, ...props }) => {
    const { resolvedTheme } = useTheme();
    const {
        colors: {
            backgroundColor = resolvedTheme === 'dark' ? '#1F2937' : 'white',
            lineColor = '#2962FF',
            textColor = resolvedTheme === 'dark' ? 'white' : '#1F2937',
            areaTopColor = '#2962FF',
            areaBottomColor = 'rgba(41, 98, 255, 0.28)',
        } = {},
    } = props;

    const chartContainerRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        if (!chartContainerRef.current) return;
        const handleResize = () => {
            chart.applyOptions({ width: chartContainerRef?.current?.clientWidth });
        };

        const chart = createChart(chartContainerRef.current, {
            layout: {
                background: { type: ColorType.Solid, color: backgroundColor },
                textColor,
            },
            width: chartContainerRef.current.clientWidth,
            height: 300,
        });

        chart.timeScale().applyOptions({ barSpacing: 10 });
        const mainSeries = chart.addCandlestickSeries();
        mainSeries.setData(data);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            chart.remove();
        };
    },[data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]);

    return (
        <div ref={chartContainerRef} />
    );
}