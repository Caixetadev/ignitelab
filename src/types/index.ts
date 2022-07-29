import { ReactNode } from "react";

export interface VideoProps {
  lessonSlug: string;
}

export interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export interface CardProps {
  title: string;
  icon: ReactNode;
  description: string;
}
