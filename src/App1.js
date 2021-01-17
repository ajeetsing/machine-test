import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import data from './data.json';

function App() {
    // const [fdata, setFdata] = useState();
    // const [filterData, setFilterData] = useState();
    // const [work, setWork] = useState()
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //   const fetch = async () => {
    //     const { data } = await axios.get('http://34.198.81.140/attendance.json')
    //     console.log("from axios", data)

    //     // const [works] = data
    //     // console.log("array one ", works)
    //     setFdata(data)
    //   }
    //   fetch();

    // }, [])


    // console.log("data come", fdata)
    // console.log("filtered", feb);
    // data.map((item) => {

    // })
    // const febData = []
    // const date = fdata.map((item) => item.date.slice(0, 3))
    // console.log(date)

    // const febData = fdata.filter((item) => item.date.slice(0, 3) === "Feb")
    // setFilterData(febData);
    // const hours = []
    // febData.forEach((item) => {
    //   hours.push(item.total_hours)

    // })
    // console.log(hours)
    // // filterData.reduce((a,c)=>{

    // // }) 
    // console.log("feb ", febData)


    console.log(data)
    const febData = data.filter((item) => item.date.slice(0, 3) === "Feb")
    console.log("febdata", febData)
    // made all employ with his id as array 
    const employeIdArray = [];
    for (let i = 1; i < 127; i++) {
        const newArray = []
        febData.forEach((item) => {
            if (item.emp_id === i) {
                newArray.push(item)
            }
        })
        employeIdArray.push(newArray)
    }





    console.log("empIdArray", employeIdArray)
    // const lessHours = data.filter((item) => item.total_hours < 8)
    const greaterThen4 = febData.filter((item) => (item.total_hours > 4 && item.total_hours < 8));
    console.log("greaterThen4", greaterThen4)
    const greaterThen8 = febData.filter((item) => (item.total_hours > 8));

    const lessThen8Array = []
    const greaterThen8Array = [];
    // const greaterThen8Chech = [];

    greaterThen8.forEach((item) => {
        if (item.total_hours > 8) {
            greaterThen8Array.push(item.basic_salary)
            // greaterThen8Chech.push(item)
        } else if (item.total_hours > 4 && item.total_hours < 8) {

            lessThen8Array.push()
        }
    })
    // console.log("greaterThen8Chech", greaterThen8Chech)
    //worker with basic salay counting 
    const workersWithBasicSalary = greaterThen8Array.reduce((a, c) => a + c);
    console.log("workersWithBasicSalary", workersWithBasicSalary.toFixed(2))
    // console.log("greaterThen8salary", greaterThen8salary)
    console.log("greaterThen8Array", greaterThen8Array)
    console.log("greaterThen8", greaterThen8)
    const worker = greaterThen4.filter((item) => item.designation === "Worker");
    console.log("Worker", worker)
    const notWorker = greaterThen4.filter((item) => item.designation !== "Worker");

    console.log("notWorker", notWorker)
    // const workerSalary = greaterThen4.map(item => {
    //   item.total_hours * (item.per_day_salary)

    // const worker = data.map((item) => item.weekday);
    // console.log("worker", worker)

    // console.log("greaterThen4", greaterThen4)
    // // setFilterData("only to count month feb ", febData);
    // console.log("only to count month feb ", febData)


    // const hours = []
    // const lessHours =[]
    // febData.forEach((item) => {
    //   if (item.total_hours<8){
    //     console.log()
    //   // const salary = item.per_day_salary/2 
    //   // hours.push(item.total_hours)
    //   // }else if(item.total_hours<4){ 

    //   }

    // })
    // console.log(hours)
    // // filterData.reduce((a,c)=>{

    // // }) 
    // console.log("feb ", febData)



    return (
        <div className="App">
            hello
        </div>
    );
}

export default App;
