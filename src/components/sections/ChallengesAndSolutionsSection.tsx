import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


export function ChallengesAndSolutions({
  challengesAndsolutions,
}: {
  challengesAndsolutions:  {
    label: string;
    challenge: string;
    solution: JSX.Element;
}[];
}) {


  return (
    <Accordion
      type="single"
      collapsible
      className="w-full space-y-2 mt-6"
      defaultValue="item-1"
      dir="rtl"

    >
      {challengesAndsolutions.map(
        (challengeObj, idx) => (
          <AccordionItem
            key={challengeObj.label}
            value={challengeObj.label}
            className="border-b-0"
          >
            <AccordionTrigger className=" bg-muted px-2 max-sm:text-xs rounded-xl">
              {challengeObj.label}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance px-2 mt-2 ">
              <p className=" max-sm:text-xs">
                <span className=" font-semibold">Challenge: </span>{" "}
                <span className=" text-muted-foreground">
                  {challengeObj.challenge}
                </span>
              </p>
              <p className=" max-sm:text-xs">
                <span className=" font-semibold">Solution: </span>{" "}
                <span className=" text-muted-foreground">
                  {challengeObj.solution}
                </span>
              </p>

              <div className=" w-full h-[1px] bg-gradient-to-r from-transparent via-muted-foreground/40 to-to-transparent " />
            </AccordionContent>
          </AccordionItem>
        )
      )}
    </Accordion>
  );
}
