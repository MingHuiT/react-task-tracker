import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {

  return (
    <>
      {/* for each task in tasks, display the text */}
      {tasks.map((task) => (
        <Task 
          key={task.id} 
          task={task} 
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  )
}

export default Tasks
