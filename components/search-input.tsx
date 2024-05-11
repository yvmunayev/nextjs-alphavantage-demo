'use client'

import { ChangeEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useDebouncedCallback } from "use-debounce";
import { useReplaceSearchParams } from "@/hooks/use-replace-search-params";

type SearchInputProps = {
    q?: string;
};

export const SearchInput: React.FC<SearchInputProps> = ({ q }) => {
    const { replace } = useReplaceSearchParams();
    const [value, setValue] = useState(q ?? '');

    const replaceSearchParams = (newValue: string) => {
        replace('q', newValue);
    }
    const debounced = useDebouncedCallback(replaceSearchParams, 200);
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const query = event.target.value;
        setValue(query);
        debounced(query);
    };
    

    return (
        <div className="w-full flex-1">
            <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search products..."
                    className="w-full appearance-none bg-background pl-8 shadow-none"
                    value={value}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};
