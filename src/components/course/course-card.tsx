"use client";
import React from "react";
import Link from "next/link";
import { Course } from "@/types/course";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Award, Play, Code2, Terminal, Layout } from "lucide-react";

export interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const getIcon = (iconName: string) => {
    if (iconName === "Terminal") return <Terminal className="h-6 w-6 text-cyan-400" />;
    if (iconName === "Layout") return <Layout className="h-6 w-6 text-emerald-400" />;
    return <Code2 className="h-6 w-6 text-amber-400" />;
  };

  return (
    <Card className="group relative flex flex-col justify-between overflow-hidden hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
      <div>
        {/* Banner Glow */}
        <div className={`h-1.5 w-full bg-gradient-to-r ${course.color || "from-indigo-500 to-violet-500"}`} />

        <CardHeader className="space-y-3 pb-4">
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-xl bg-surface-elevated border border-border group-hover:scale-110 group-hover:shadow-md group-hover:shadow-indigo-500/10 transition-all">
              {getIcon(course.icon)}
            </div>
            <div className="flex gap-2">
              {course.isPopular && <Badge variant="warning">Populer</Badge>}
              {course.isNew && <Badge variant="success">Baru</Badge>}
              <Badge variant="outline" className="capitalize">{course.level}</Badge>
            </div>
          </div>

          <CardTitle className="text-lg font-extrabold group-hover:text-indigo-300 transition-colors">
            {course.title}
          </CardTitle>
          <CardDescription className="line-clamp-2 text-xs">
            {course.shortDescription}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4 text-xs text-muted-foreground">
          <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-lg bg-surface/80 border border-border text-center">
            <div>
              <span className="block font-bold text-foreground">{course.totalLessons}</span>
              <span>Materi</span>
            </div>
            <div>
              <span className="block font-bold text-foreground">{course.estimatedHours} Jam</span>
              <span>Estimasi</span>
            </div>
            <div>
              <span className="block font-bold text-emerald-400">+{course.totalXp}</span>
              <span>XP Total</span>
            </div>
          </div>
        </CardContent>
      </div>

      <CardFooter className="pt-0">
        <Link href={`/learn/${course.slug}`} className="w-full">
          <Button variant="primary" className="w-full gap-2 font-bold">
            <Play className="h-4 w-4 fill-white" /> Mulai Belajar
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
