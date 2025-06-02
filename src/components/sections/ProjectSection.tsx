"use client";

import { DATA } from "@/data/resume";
import BlurFade from "../magicui/blur-fade";
import { ProjectCard } from "../project-card";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {motion} from "framer-motion"

const BLUR_FADE_DELAY = 0.04;

export default function ProjectSection() {
  const [projects, setProjects] = useState(DATA.projects.slice(0, 4));
  const [showMore, setShowMore] = useState(false);
  return (
    <motion.div layout className="space-y-12 w-full py-12">
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              My Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Check out my latest work
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;ve worked on a variety of projects, from simple websites to
              complex web applications. Here are a few of my favorites.
            </p>
          </div>
        </div>
      </BlurFade>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[800px] mx-auto">
        {projects.map((project, id) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
          >
            <ProjectCard
              href={project.href}
              key={project.title}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project.links}
            />
          </BlurFade>
        ))}
      </div>

      <div className=" flex items-center gap-1 justify-center group -translate-y-8">
        <Button
          size="sm"
          onClick={() => {
            if (showMore) {
              setProjects(DATA.projects.slice(0, 4));
              setShowMore(false);
            } else {
              setProjects(DATA.projects);
              setShowMore(true);
            }
          }}
        >
          {showMore ? "Show Less" : "Show More"}{" "}
          <ChevronDown
            className={cn(
              " w-4 h-4 group-hover:translate-y-[2px] transition-all duration-300",
              {
                "rotate-180": showMore,
              }
            )}
          />
        </Button>
      </div>
    </motion.div>
  );
}
