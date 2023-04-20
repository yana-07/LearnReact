import ChartBar from './ChartBar'
import './Chart.css'

function Chart({dataPoints}) {
    const totalMaximum = Math.max(...dataPoints.map(dataPoint => dataPoint.value));

    const chartBarElements = dataPoints.map(dataPoint => {
        return (
            <ChartBar 
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMaximum} 
                label={dataPoint.label}
            />
        )
    });

    return (
        <div className="chart">
            {chartBarElements}
        </div>
    );
};

export default Chart;