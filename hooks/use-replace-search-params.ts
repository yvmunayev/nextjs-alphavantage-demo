'use client'

import { useRouter, useSearchParams, usePathname } from "next/navigation";

export const useReplaceSearchParams = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    return {
        replace: (key: string, value: string ) => {
            const newSearchParams = new URLSearchParams(searchParams);
            newSearchParams.set(key, value);
            replace(`${pathname}?${newSearchParams.toString()}`);
        }
    }
};


