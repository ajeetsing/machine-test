import React from 'react';
import './App.css';
import data from './data.json';

function App() {
  const febData = data.filter((item) => item.date.slice(0, 3) === "Feb");

  // made all employ with his id as array 
  const basicSalary = [];
  const overTime = [];
  for (let i = 1; i < 127; i++) {
    const newArray = [];
    const newOverTime = [];
    febData.forEach((item) => {
      if (item.emp_id === i) {
        if (item.weekday > 1 && item.weekday < 7) {
          if (item.total_hours >= 4.00 && item.total_hours < 8.00) {
            newArray.push(item.per_day_salary / 2)

          } else if (item.total_hours >= 8) {
            if (item.designation === "Worker" && item.total_hours >= 9) {
              const overTime = Math.trunc(item.total_hours - 8);
              const overTimeWithsalary = Math.trunc((item.per_day_salary / 8) * 2);
              newOverTime.push(overTime * overTimeWithsalary);
            } else if (item.designation !== "Worker" && item.total_hours >= 9) {
              const overTime = Math.trunc(item.total_hours - 8);
              const overTimeWithsalary = Math.trunc((item.per_day_salary / 8));
              newOverTime.push(overTime * overTimeWithsalary);
            }
            newArray.push(item.per_day_salary)

          }
        }
      }
    })
    basicSalary.push(newArray);
    overTime.push(newOverTime);
  }
  console.log("employeIdArray with salary ", basicSalary)
  console.log("overTime", overTime)

  // for counting salary 
  const salaryCount = []
  basicSalary.forEach((item) => {
    const salary = item.reduce((a, c) => a + c)
    salaryCount.push(salary)

  })
  console.log("salaryCount", salaryCount)

  const finalSalary = salaryCount.reduce((a, c) => a + c);

  console.log("finalSalary", finalSalary)
  // Array for counting who was presence 4 hours or 8 hours
  // manging all employe with there id to do some meth 

  const overTimeCount = [];
  overTime.forEach((item) => {
    if (item.length > 0) {
      const salary = item.reduce((a, c) => a + c)
      overTimeCount.push(salary)
    }
  })
  console.log("overTimeCount", overTimeCount)

  const finalOvertime = overTimeCount.reduce((a, c) => a + c);

  console.log("finalOvertime", finalOvertime)


  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
