"use client";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {students25} from "@/data/students";
import {IconCaretLeft, IconCaretRight} from "@tabler/icons-react";
import {useState} from "react";
import {Input} from "@/components/ui/input";

export function StudentTable() {
    const [search, setSearch] = useState('')
    const filteredStudents = students25.filter(student => student.lastName.toLowerCase().includes(search.toLowerCase()) || student.firstName.toLowerCase().includes(search.toLowerCase()))

    const students = search ? filteredStudents : students25
    return (
        <>
            <Input placeholder="Rechercher par nom ou prénom" className="max-w-80 mb-10" type={search} onChange={(e) => setSearch(e.target.value)}/>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="font-bold">Nom</TableHead>
                        <TableHead className="font-bold">Prénom</TableHead>
                        <TableHead className="font-bold">Age</TableHead>
                        <TableHead className="font-bold">Classe</TableHead>
                        <TableHead className="font-bold">Diplôme</TableHead>
                        <TableHead className="font-bold">Spécialité</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {students.slice(0,10).map((student, index) => (
                        <TableRow key={student.lastName + index}>
                            <TableCell>{student.lastName}</TableCell>
                            <TableCell>{student.firstName}</TableCell>
                            <TableCell>{student.age}</TableCell>
                            <TableCell>{student.class}</TableCell>
                            <TableCell>{student.diploma}</TableCell>
                            <TableCell>{student.speciality}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="flex items-center justify-center w-full pt-10">
                <button><IconCaretLeft/></button>
                <span>10 / {students25.length}</span>
                <button><IconCaretRight/></button>
            </div>
        </>
    )
}
