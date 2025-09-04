"use client"
import React from 'react';
import {TrendingDown, TrendingUp} from "lucide-react"
import {Bar, BarChart, CartesianGrid, XAxis} from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import {Student} from "@/types/types";


export const description = "Nombre d'élèves inscrits"


const StudentsStats = ({students25, students24}: { students25: Student[], students24: Student[] }) => {

    const chartData = [
        {year: "2024", students: students24.length},
        {year: "2025", students: students25.length},
    ]

    const chartConfig = {
        previous: {
            label: "2024",
            color: "var(--chart-1)",
        },
        current: {
            label: "2025",
            color: "var(--chart-2)",
        },
    } satisfies ChartConfig

    const studentsVariation = (students25.length - students24.length) / students24.length * 100;

    return (
        <Card>
            <CardHeader>
                <CardTitle>Inscription</CardTitle>
                <CardDescription>Évolution annuel 2024 - 2025</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false}/>
                        <XAxis
                            dataKey="year"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dashed"/>}
                        />
                        <Bar dataKey="students" fill="var(--color-previous)"/>
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 leading-none font-medium">
                    {studentsVariation > 0 ? (
                        <>
                            Hausse de :
                            <TrendingUp className="size-4 text-green-500"/> {" "}
                            <span className="text-green-500">
                                {studentsVariation.toFixed()}%
                            </span>
                        </>
                ):(
                    <>
                        Baisse de :
                        <TrendingDown className="size-4 text-red-500"/> {" "}
                        <span className="text-green-500">
                        {studentsVariation.toFixed()}%
                    </span>
                    </>
                )}
            </div>
        </CardFooter>
</Card>
)
    ;
};

export default StudentsStats;