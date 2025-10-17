import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import Markdown from "react-markdown";
import { IconExternalLink } from "@tabler/icons-react";

interface Props {
  title: string;
  href: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  achievement: string[];
  detailsPath?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
  achievement,
  detailsPath,
}: Props) {
  let hrefPath = detailsPath || href;

  return (
    <Link href={hrefPath} className={cn("block cursor-pointer", className)}>
      <Card
        className={
          "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
        }
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}

        <CardHeader className="px-2">
          <div className="space-y-1">
            <CardTitle className="mt-1 text-base">{title}</CardTitle>
            <time className="font-sans text-xs">{dates}</time>
            <div className="hidden font-sans text-xs underline print:visible">
              {link
                ?.replace("https://", "")
                .replace("www.", "")
                .replace("/", "")}
            </div>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm   text-muted-foreground dark:prose-invert">
              {description}
            </Markdown>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex flex-col px-2">
          {tags && tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {tags?.map((tag) => (
                <Badge
                  className="px-1 py-0 text-[10px]"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="px-2 pb-2 flex flex-col gap-2 items-start">
          <div className="w-full">
            {links && links.length > 0 && (
              <div className="flex gap-2 justify-between items-center w-full  ">
                <div className="flex gap-2 flex-row flex-wrap items-start w-full ">
                  {links?.map((link, idx) => (
                    <Link href={link?.href} key={idx} target="_blank" onClick={(e)=>e.stopPropagation()}>
                      <Badge
                        key={idx}
                        className="flex gap-2 px-2 py-1 text-[10px]"
                      >
                        {link.icon}
                        {link.type}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {achievement?.length > 0 && (
            <div className=" w-[90%] bg-gradient-to-r from-neutral-400/20 via-neutral-400/80 to-neutral-400/20 mx-auto h-[1px] " />
          )}
          <div className=" space-x-2">
            {achievement.map((value, idx) => (
              <Badge
                key={`ach-${idx}`}
                className=" bg-gradient-to-br from-amber-500 to-orange-600 "
              >
                <p className="drop-shadow-md">{value}</p>
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
