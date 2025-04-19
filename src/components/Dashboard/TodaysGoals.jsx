import { FiCheck } from 'react-icons/fi';

function TodaysGoals({ goals }) {
  const completedGoals = goals.filter(goal => goal.completed).length;
  const totalGoals = goals.length;
  const completionPercentage = totalGoals > 0 ? Math.round((completedGoals / totalGoals) * 100) : 0;
  
  return (
    <div className="card">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Today's Goals</h3>
        <span className="text-sm font-medium">
          {completedGoals}/{totalGoals} Completed
        </span>
      </div>
      
      {/* Progress bar */}
      <div className="w-full h-2 bg-neutral-100 rounded-full mb-6">
        <div 
          className="h-full bg-primary rounded-full"
          style={{ width: `${completionPercentage}%` }}
        ></div>
      </div>
      
      {goals.length === 0 ? (
        <div className="text-center py-6 text-neutral-500">
          <p>No goals set for today</p>
          <button className="mt-3 btn btn-outline">Set Goals</button>
        </div>
      ) : (
        <div className="space-y-3">
          {goals.map((goal, index) => (
            <div 
              key={index} 
              className="flex items-center p-3 hover:bg-neutral-50 rounded-lg transition-colors"
            >
              <div 
                className={`h-6 w-6 rounded-full mr-3 flex items-center justify-center ${
                  goal.completed ? 'bg-primary text-white' : 'border border-neutral-300'
                }`}
              >
                {goal.completed && <FiCheck size={14} />}
              </div>
              <div className="flex-1">
                <p className={`font-medium ${goal.completed ? 'text-neutral-500 line-through' : 'text-neutral-800'}`}>
                  {goal.title}
                </p>
              </div>
              <div className="text-right">
                <span className="text-sm text-neutral-500">{goal.target}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <button className="mt-6 w-full btn btn-outline">
        Manage Goals
      </button>
    </div>
  );
}

export default TodaysGoals;