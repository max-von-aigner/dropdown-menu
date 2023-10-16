import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import {
  motion,
  AnimatePresence,
  useSpring,
  easeIn,
  easeInOut,
} from "framer-motion";
import { Scale } from "lucide-react";

interface TagCardRightProps {
  className?: string;
  selectedBadges: string[];
  onBadgeDeselect: (badgeName: string) => void;
}

const dropIn = {
  hidden: {
    // x: "50vw",
    opacity: 0,
    scale: 0,
  },
  visible: {
    // x: "0",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 20,
      stiffness: 200,
    },
  },
};

const TagCardRight: React.FC<
  TagCardRightProps & { selectedBadges: string[] }
> = ({ className, selectedBadges, onBadgeDeselect }) => {
  return (
    <Card className="col-start-6 col-span-3 row-start-3 row-span-4">
      <CardHeader>
        <CardTitle className="text-center text-zinc-800 ">
          Your Sports
        </CardTitle>
        <CardDescription className=" text-center"></CardDescription>
        <Separator />
      </CardHeader>

      <CardContent>
        {selectedBadges.map((badge) => (
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            style={{ display: "inline-block" }}
            whileHover={{ scale: 1.1 }}
          >
            <Badge
              key={badge}
              variant="secondary"
              className="text-zinc-800 text-lg m-2 cursor-pointer "
              onClick={() => onBadgeDeselect(badge)}
            >
              {badge}
            </Badge>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TagCardRight;
