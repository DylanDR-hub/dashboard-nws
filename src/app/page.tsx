"use client";
import StudentsStats from "@/components/dashboard/StudentsStats";
import ActiveStudentsStats from "@/components/dashboard/ActiveStudentsStats";
import {students25, students24} from "@/data/students";
import React from "react";
import GraduateChart from "@/components/dashboard/GraduatedChart";
import {StudentByLevel} from "@/components/dashboard/StudentByLevel";
import StudentBySpe from "@/components/dashboard/StudentBySpe";


export default function Home() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
        <StudentsStats students24={students24} students25={students25} />
        <ActiveStudentsStats students24={students24} students25={students25} />
        <GraduateChart students25={students25} students24={students24} />
        <StudentByLevel students25={students25} />
    </div>
  );
}
