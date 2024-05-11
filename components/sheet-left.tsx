'use client'

import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import Image from "next/image";
import { createContext, useState } from "react";

type SheetLeftProps = {
    children: React.ReactNode;
};

export const SheetLeftContext = createContext({
    setOpen: (open: boolean) => {},
});

export const SheetLeft: React.FC<SheetLeftProps> = ( { children }) => {
    const [open, setOpen] = useState(false);
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col pt-3">
                <div className="grid gap-2 text-lg font-medium">
                    <SheetLeftContext.Provider value={{ setOpen }}>
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-lg font-semibold"
                            onClick={() =>setOpen(false)}
                        >
                            <Image src="/icon.svg" width={40} height={40} alt="Alphavantage" />
                            <span>Alphavantage Demo</span>
                        </Link>
                        {children}
                    </SheetLeftContext.Provider>
                </div>
            </SheetContent>
        </Sheet>
    );
}
