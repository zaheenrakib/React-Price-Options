import { LineChart as LChart, Line ,XAxis,YAxis } from 'recharts';

const LineChart = () => {

    const studentScores = [
        { id: 1, name: "Alice", mathScore: 85, physicsScore: 78, chemistryScore: 90 },
        { id: 2, name: "Bob", mathScore: 92, physicsScore: 85, chemistryScore: 88 },
        { id: 3, name: "Charlie", mathScore: 78, physicsScore: 75, chemistryScore: 82 },
        { id: 4, name: "David", mathScore: 88, physicsScore: 80, chemistryScore: 85 },
        { id: 5, name: "Eva", mathScore: 90, physicsScore: 88, chemistryScore: 92 },
        { id: 6, name: "Frank", mathScore: 75, physicsScore: 72, chemistryScore: 78 },
        { id: 7, name: "Grace", mathScore: 82, physicsScore: 79, chemistryScore: 85 },
        { id: 8, name: "Henry", mathScore: 95, physicsScore: 90, chemistryScore: 96 },
        { id: 9, name: "Ivy", mathScore: 80, physicsScore: 75, chemistryScore: 82 },
        { id: 10, name: "Jack", mathScore: 87, physicsScore: 84, chemistryScore: 88 }
    ];

    return (
        <div>
            <LChart width={800} height={400} data={studentScores}>
                <XAxis dataKey={'name'}></XAxis> 
                <YAxis></YAxis>
            <Line dataKey="mathScore" stroke='red'></Line>
            <Line dataKey={'physicsScore'} stroke='yellow'></Line>
            </LChart>
        </div>
    );
};

LineChart.propTypes = {
    
};

export default LineChart;