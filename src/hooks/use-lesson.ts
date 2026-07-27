"use client";
import { useState, useEffect } from "react";
import { Lesson } from "@/types/lesson";
import { getLessonBySlug } from "@/features/lessons/queries";

export function useLesson(courseSlug: string, lessonSlug: string) {
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLesson() {
      setLoading(true);
      const item = await getLessonBySlug(courseSlug, lessonSlug);
      setLesson(item);
      setLoading(false);
    }
    if (courseSlug && lessonSlug) {
      loadLesson();
    }
  }, [courseSlug, lessonSlug]);

  return { lesson, loading };
}
