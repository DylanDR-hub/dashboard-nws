import React from 'react';
import {Student} from "@/types/types";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A stacked bar chart with a legend"


const GraduateChart = ({students25, students24} : {students25: Student[], students24: Student[]}) => {

    const chartData = [
        { year: "2024", active: students24.filter(student => !student.active && student.graduated).length, inactive: students24.filter(student => !student.active && !student.graduated).length },
        { year: "2025", active: students25.filter(student => !student.active && student.graduated).length, inactive: students25.filter(student => !student.active && !student.graduated).length },
    ]
    const chartConfig = {
        active: {
            label: "Actifs",
            color: "var(--chart-1)",
        },
        inactive: {
            label: "Démissionnaires",
            color: "var(--chart-4)",
        },
    } satisfies ChartConfig
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-2">
                    <CardTitle className="font-bold">Nombre d&apos;étudiants actifs :</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="year"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                        />
                        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Bar
                            dataKey="active"
                            stackId="a"
                            fill="var(--color-active)"
                            radius={[0, 0, 4, 4]}
                        />
                        <Bar
                            dataKey="inactive"
                            stackId="a"
                            fill="var(--color-inactive)"
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};

export default GraduateChart;