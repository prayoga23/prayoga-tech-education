"use client";
import React from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { day: "Sen", xp: 50 },
  { day: "Sel", xp: 120 },
  { day: "Rab", xp: 180 },
  { day: "Kam", xp: 240 },
  { day: "Jum", xp: 320 },
  { day: "Sab", xp: 390 },
  { day: "Min", xp: 450 },
];

export function ProgressChart() {
  return (
    <div className="h-64 w-full pt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="xpGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#121215",
              borderColor: "#27272a",
              borderRadius: "8px",
              color: "#fff",
            }}
          />
          <Area
            type="monotone"
            dataKey="xp"
            stroke="#6366f1"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#xpGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
