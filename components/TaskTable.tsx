"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Task {
  id: number;
  name: string;
  link: string;
  points: number;
  proof: File | null;
}

const TaskTable: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: "Star the Loftlabs Repo", link: "h", points: 15, proof: null },
    { id: 2, name: "Star and fork LLMware.ai Repo", link: "", points: 10, proof: null },
    { id: 3, name: "Follow DotStrak LinkedIn", link: "", points: 5, proof: null },
    { id: 4, name: "Star Keploy Repo", link: "", points: 5, proof: null },
    { id: 5, name: "Submit on Quill AI", link: "", points: 5, proof: null },
    { id: 6, name: "Follow Resourcio YouTube", link: "", points: 3, proof: null },
    { id: 7, name: "Follow Resourcio Twitter", link: "", points: 2, proof: null }
  ]);

  const handleFileChange = (index: number, file: File | null) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].proof = file;
    setTasks(updatedTasks);
  };

  const handleComplete = (index: number) => {
    if (!tasks[index].proof) {
      alert("Please upload proof before completing the task.");
      return;
    }
    alert(`Task ${tasks[index].name} completed!`);
  };

  return (
    <div className="bg-black w-full px-4 py-5 md:px-32">
      <div className="flex flex-col items-center text-center mb-6">
        <h1 className="text-4xl md:text-7xl font-bold text-textyellow font-mokoto">WELCOME TO APERTRE 2.0</h1>
        <span className="text-lg md:text-2xl text-white font-Poppins my-4">Complete the following tasks to earn extra points</span>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-t-2 text-white border-gray-300">
          <thead>
            <tr className="text-white bg-gray-800">
              {['Sl No', 'Task Name', 'Link', 'Proof', 'Complete Task', 'Points'].map(header => (
                <th key={header} className="py-2 px-3 border">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task.id} className="border-t">
                <td className="py-2 px-3 text-center">{task.id}</td>
                <td className="py-2 px-3">{task.name}</td>
                <td className="py-2 px-3">
                  <a href={task.link} target="_blank" rel="noopener noreferrer" className="text-textyellow">Visit</a>
                </td>
                <td className="py-2 px-3">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(index, e.target.files?.[0] ?? null)}
                    className="p-1"
                  />
                </td>
                <td className="py-2 px-3 text-center">
                  <Button
                    onClick={() => handleComplete(index)}
                    className="bg-yellow-400 text-black px-3 py-1 hover:bg-yellow-500"
                  >Complete Task</Button>
                </td>
                <td className="py-2 px-3 text-center">{task.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskTable;
