"use client";
import { useState, useEffect } from "react";
import { Course } from "@/types/course";
import { getCourseBySlug, getCourses } from "@/features/courses/queries";

export function useCourse(slug?: string) {
  const [courses, setCourses] = useState<Course[]>([]);
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      if (slug) {
        const item = await getCourseBySlug(slug);
        setCourse(item);
      }
      const list = await getCourses();
      setCourses(list);
      setLoading(false);
    }
    loadData();
  }, [slug]);

  return { courses, course, loading };
}
