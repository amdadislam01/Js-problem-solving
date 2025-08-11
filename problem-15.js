/**
 * For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary.
 * Now calculate is the total salary has to be provided by the company in a month.
 * const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];
 */


const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function employeeSalary(empolyee) {
    return empolyee.starting + (empolyee.experience * empolyee.increment);
}

// One person 
console.log(employees[0].name, "Current Salary:", employeeSalary(employees[0]));

// Total Person
let totalSalary = 0;
for (let employee of employees) {
    totalSalary += employeeSalary(employee);
}
console.log("Total Monthly Salary:", totalSalary);

/**
 * Output :
 * 1. shahin Current Salary: 45000
 * 2. Total Monthly Salary: 149000
 */