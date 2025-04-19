import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function WellnessScore({ score }) {
    // Ensure score is between 0-100
    const normalizedScore = Math.min(100, Math.max(0, score));

    // Determine color based on score
    const getColor = () => {
        if (normalizedScore >= 80) return '#10B981'; // Green for high
        if (normalizedScore >= 60) return '#F59E0B'; // Amber for medium
        return '#EF4444'; // Red for low
    };

    const data = {
        datasets: [
            {
                data: [normalizedScore, 100 - normalizedScore],
                backgroundColor: [getColor(), '#E5E7EB'],
                borderWidth: 0,
                cutout: '70%',
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
    };

    // Determine message based on score
    const getMessage = () => {
        if (normalizedScore >= 80) return 'Excellent';
        if (normalizedScore >= 60) return 'Good';
        if (normalizedScore >= 40) return 'Fair';
        return 'Needs Improvement';
    };

    return (
        <div className="card">
            <h3 className="text-lg font-medium mb-4">Wellness Score</h3>
            <div className="relative h-52 flex items-center justify-center">
                <Doughnut data={data} options={options} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold">{normalizedScore}</span>
                    <span className="text-sm text-neutral-500">{getMessage()}</span>
                </div>
            </div>
            <div className="mt-4 text-center">
                <p className="text-sm text-neutral-600">Based on your activity, sleep, and nutrition data</p>
                <button className="mt-3 btn btn-outline text-sm w-full">View Details</button>
            </div>
        </div>
    );
}

export default WellnessScore;