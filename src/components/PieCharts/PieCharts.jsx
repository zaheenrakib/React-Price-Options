
import { PieChart, Pie, Cell } from 'recharts';
const PieCharts = () => {

    const data = [
        { name: 'A', value: 80, color: '#ff0000' },
        { name: 'B', value: 45, color: '#00ff00' },
        { name: 'C', value: 25, color: '#0000ff' },
      ];
      const cx = 150;
      const cy = 200;
      const iR = 50;
      const oR = 100;

      

    return (
        <div>

            <PieChart width={400} height={500}>
                <Pie
                    dataKey="value"
                    startAngle={180}
                    endAngle={0}
                    data={data}
                    cx={cx}
                    cy={cy}
                    innerRadius={iR}
                    outerRadius={oR}
                    fill="#8884d8"
                    stroke="none"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
            </PieChart>

        </div>
    );
};

PieCharts.propTypes = {

};

export default PieCharts;