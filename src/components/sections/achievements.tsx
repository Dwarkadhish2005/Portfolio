import { ACHIEVEMENTS } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const AchievementsSection = () => {
  if (!ACHIEVEMENTS || ACHIEVEMENTS.length === 0) return null;
  return (
    <SectionWrapper
      className="flex flex-col items-center justify-center min-h-[80vh] py-20 z-10"
    >
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="achievements"
          title="Achievements"
          desc="Milestones and accomplishments in competitive programming."
          className="mb-12 md:mb-20 mt-0"
        />

        <div className="flex flex-col gap-6 relative">
          {ACHIEVEMENTS.map((achievement, index) => (
            <div key={achievement.id} className="relative">
              <AchievementCard achievement={achievement} index={index} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const AchievementCard = ({
  achievement,
  index,
}: {
  achievement: typeof ACHIEVEMENTS[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card
        className={cn(
          "bg-card text-card-foreground border-border",
          "hover:border-primary/20 transition-colors duration-300",
          "shadow-sm hover:shadow-md"
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-2">
              <CardTitle className="text-lg md:text-xl font-bold tracking-tight flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                {achievement.title}
              </CardTitle>
              <div className="text-sm md:text-base font-medium text-muted-foreground leading-relaxed">
                {achievement.description}
              </div>
            </div>
            <Badge variant="secondary" className="w-[fit-content] font-mono text-xs font-normal whitespace-nowrap">
              {achievement.date}
            </Badge>
          </div>
        </CardHeader>
      </Card>
    </motion.div>
  );
};

export default AchievementsSection;
