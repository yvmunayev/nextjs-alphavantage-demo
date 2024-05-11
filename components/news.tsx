import { getNewsSentiment } from "@/actions/stock";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardFooter,
  } from "@/components/ui/card"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TimeAgo } from '@/components/ui/time-ago';

type NewsProps = {
    symbol?: string;
};

export const News: React.FC<NewsProps> = async ({ symbol }) => {
    const newsSentiment = await getNewsSentiment(symbol);
    return (
        <div className="grid gap-4 p-2 grid-cols-1 sm:grid-cols-3">
            {newsSentiment.feed.map(({ title, authors, url, time_published, banner_image }) => (
                <Card className="flex flex-col pt-6 justify-between transform transition-all hover:scale-105" key={title}>
                    <CardContent className="flex">
                        <div>
                            <span>{authors}</span>
                            <h3 className="text-lg font-semibold">{title}</h3>
                        </div>
                        <Image className="h-[100px] border rounded-sm" src={banner_image || '/next.svg'} width={100} height={100} alt={title} />
                    </CardContent>
                    <CardFooter className="flex justify-between pb-2">
                        <TimeAgo date={time_published} />
                        <Link href={url} target="_blank">
                            <Button variant="link" size="sm">Read More</Button>
                        </Link>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}