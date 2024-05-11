'use client'

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useReplaceSearchParams } from "@/hooks/use-replace-search-params";

type TimeframeProps = {
    frames?: string[];
    timeframe?: string;
};

export const Timeframe: React.FC<TimeframeProps> = ({ frames = ['NOM', '1D', '1W', '1M'], timeframe = "NOW" }) => {
    const { replace } = useReplaceSearchParams();

    const handleTimeframeChange = (timeframe: string) => {
        replace('timeframe', timeframe);
    }

    return (
        <ToggleGroup value={timeframe} defaultValue="NOM" type="single" onValueChange={handleTimeframeChange}>
            {frames.map((frame) => (
                <ToggleGroupItem key={frame} value={frame}>{frame}</ToggleGroupItem>
            ))}
        </ToggleGroup>
    );
}