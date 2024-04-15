import React from 'react';
/* import LineChart from './LineChart'; */
import LineChart from 'components/LineChart';

const DashboardOle = () => {
    /*  const data = [
         { x: 1, y: 10 },
         { x: 2, y: 15 },
         { x: 3, y: 20 },
         { x: 4, y: 25 },
         { x: 5, y: 30 }
     ]; */
    const data = [
        { x: 1, y: 10 },
        { x: 2, y: 15 },
        { x: 3, y: 20 },
        { x: 4, y: 25 },
        { x: 5, y: 30 },
        { x: 8, y: 50 },
        { x: 9, y: 60 },
        { x: 10, y: 120 },
    ];
    const data1 = [
        { x: 1, y: 10 },
        { x: 2, y: 15 },
        { x: 3, y: 20 },
        { x: 4, y: 25 },
        { x: 5, y: 30 },
        { x: 8, y: 70 },
        { x: 9, y: 60 },
        { x: 10, y: 180 },
    ];
    const data2 = [
        { x: 1, y: 10 },
        { x: 2, y: 15 },
        { x: 3, y: 20 },
        { x: 4, y: 25 },
        { x: 5, y: 30 },
        { x: 8, y: 50 },
        { x: 9, y: 90 },
        { x: 10, y: 150 },
    ];
    const data3 = [
        { x: 1, y: 10 },
        { x: 2, y: 15 },
        { x: 3, y: 20 },
        { x: 4, y: 15 },
        { x: 5, y: 30 },
        { x: 8, y: 50 },
        { x: 9, y: 100 },
        { x: 10, y: 120 },
    ];

    return (
        <div className='bg-red-300 w-full h-full ' >
            <h1 className=' text-center text-xl font-bold p-5 ' >My Dashboard</h1>
            {/*  <LineChart data={data} width={400} height={300} /> */}
            <div className='w-full grid grid-cols-2 gap-4 m-5' >
                <div className='m-5 bg-orange-300 ' >
                    <LineChart data={data} width={400} height={300} />
                </div>
                <div className='m-5 bg-orange-500 ' >
                    <LineChart data={data1} width={400} height={300} />
                </div>
                <div className='m-5 bg-orange-700 ' >
                    <LineChart data={data2} width={400} height={300} />
                </div>
                <div className='m-5 bg-orange-900 ' >
                    <LineChart data={data3} width={400} height={300} />
                </div>

                {/*      <LineChart data={data1} width={400} height={300} />
                <LineChart data={data2} width={400} height={300} />
                <LineChart data={data3} width={400} height={300} /> */}
            </div>
        </div>
    );
};

export default DashboardOle;