import React from 'react';
import {StudentTable} from "@/components/StudentTable";

const StudentPage = () => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-semibold pb-10">Listes des élèves</h1>
            <StudentTable />
        </div>
    );
};

export default StudentPage;