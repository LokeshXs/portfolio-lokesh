import { ChallengesAndSolutions } from "@/components/sections/ChallengesAndSolutionsSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PROJECT_KEY_CHALLENGES } from "@/data/projectData";
import { DATA } from "@/data/resume";
import { IconArrowLeftDashed, IconExternalLink, IconHome, IconHomeFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectData = PROJECT_KEY_CHALLENGES.filter(
    (item) => item.slug === slug
  )[0];
  return (
    <div className="min-h-[100dvh]    w-full max-sm:pb-14 relative  ">
      <div className=" flex flex-col items-center gap-4">
        <h1 className=" text-4xl max-md:text-3xl font-bold drop-shadow-md">
          {projectData.name}
        </h1>
        <p className=" text-muted-foreground text-center text-sm max-sm:text-xs">
          {projectData.summary}
        </p>
      </div>

      <div className=" space-y-2 mt-4" >
        <Carousel className=" w-full  ">
          <CarouselContent className=" flex items-center">
            {DATA.projects[0].images?.map((imgPath, idx) => (
              <CarouselItem
                key={`hellopetdreams-img-${idx}`}
                className="  flex  justify-center   "
              >
                
                  <Image
                    src={imgPath}
                    alt="image"
                    width={600}
                    height={400}
                    className=" shadow-md   "
                  />
               
              </CarouselItem>
            ))}
          </CarouselContent >
          <CarouselPrevious className=" translate-x-6" />
          <CarouselNext  className=" -translate-x-6" />
        </Carousel>

        <div className=" flex justify-start px-2">
          <Link href={projectData.website} target="_blank">
            <Badge className=" flex justify-center items-center gap-2 py-1">
              Website <IconExternalLink className=" w-4 h-4" />
            </Badge>
          </Link>
        </div>
      </div>

      <div className=" mt-12 max-sm:mt-8">
        <h2 className=" text-2xl max-sm:text-xl font-semibold  drop-shadow-sm text-center">
          Challenges & Solutions
        </h2>
        <div>
          <ChallengesAndSolutions
            challengesAndsolutions={projectData.challengesAndSolutions}
          />
        </div>
      </div>

      <Button asChild  size="icon" variant="secondary" className=" absolute top-0 left-2 -translate-y-14 rounded-full max-sm:-translate-y-10 max-sm:-left-2">
      <Link href="/">
        <IconHome />
      </Link>
      </Button>
    </div>
  );
}
