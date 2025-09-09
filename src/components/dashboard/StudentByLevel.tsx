"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
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

export function StudentByLevel({students25} : {students25: Student[]}) {
    const chartData = [
        { level: "bachelor", students: students25.filter(s => s.diploma === "Bachelor").length, fill: "var(--color-bachelor)" },
        { level: "mastere", students: students25.filter(s => s.diploma === "Mastère").length, fill: "var(--color-mastere)" },
    ]

    const chartConfig = {
        students: {
            label: "Élèves",
        },
        bachelor: {
            label: "Bachelor",
            color: "var(--chart-1)",
        },
        mastere: {
            label: "Mastère",
            color: "var(--chart-2)",
        }
    } satisfies ChartConfig

    const totalStudents = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.students, 0)
    }, [])

    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>Répartition des élèves par niveau</CardTitle>
                <CardDescription>Année 2025</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="students"
                            nameKey="level"
                            innerRadius={60}
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {totalStudents.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Élèves
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
