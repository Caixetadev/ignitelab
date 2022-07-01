import { ReactNode } from "react";

export interface GetLessonBySlugResponse {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      name: string;
      avatarURL: string;
      bio: string;
    };
  };
}

export interface VideoProps {
  lessonSlug: string;
}

export interface GetLessonsQueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: "live" | "class";
  }[];
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
