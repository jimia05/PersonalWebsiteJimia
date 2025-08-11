import React from "react";
import Card from "./Card";

const skills = [
	"Java",
	"React",
	"Tailwind CSS",
	"Python",
	"C#",
	"SQL",
];

const Skills = () => (
	<Card>
		<h2 className="text-2xl font-bold mb-4">Skills</h2>
		<ul className="flex flex-wrap gap-3">
			{skills.map((skill) => (
				<li
					key={skill}
					className="px-4 py-2 bg-primary text-primary-foreground rounded-full shadow-sm font-medium transition hover:scale-105 hover:shadow-md"
				>
					{skill}
				</li>
			))}
		</ul>
	</Card>
);

export default Skills;