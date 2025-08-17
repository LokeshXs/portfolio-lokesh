"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import BlurFade from "../magicui/blur-fade";
import { Card } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Autoplay from "embla-carousel-autoplay"

const BLUR_FADE_DELAY = 0.04;

export default function TestimonialSection({
  testimonials,
}: {
  testimonials: {
    content: string;
    name: string;
    designation: string;
    profileImg: string;
  }[];
}) {
  return (
    <motion.div layout className="space-y-12 max-sm:space-y-6 w-full py-12">
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Words of Appreciation
            </h2>
          </div>
        </div>
      </BlurFade>

      <div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
            
          }}
          plugins={
            [
                Autoplay({
                    delay:5000
                })
            ]
          }
          
          className="w-full max-sm:w-[95%] mx-auto  "
        >
          <CarouselContent>
            {testimonials.map((value, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/2 py-4"
              >
                <Card
                  className={
                    "flex flex-col justify-between gap-4 overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full p-2 "
                  }
                >
                  <blockquote>
                    <p className=" text-sm text-pretty">
                      &quot;{value.content}.&quot;
                    </p>
                  </blockquote>

                  <div className=" flex gap-2 items-start">
                    <Avatar>
                      <AvatarImage src={value.profileImg} />
                      <AvatarFallback>
                        {value.name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <p className=" text-sm font-semibold">{value.name}</p>
                      <p className=" text-xs text-muted-foreground">
                        {value.designation}
                      </p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=" max-sm:translate-x-4"  />
          <CarouselNext className=" max-sm:-translate-x-4" />
        </Carousel>
      </div>
    </motion.div>
  );
}
