import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {
  // Variable here before return
  const [showAddTask, setShowAddTask] = useState(false)
  
  const [tasks, setTasks] = useState ([
    {
      id: 1,
      text: 'Appointment',
      day: 'Feb 2',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting',
      day: 'Feb 2',
      reminder: true,
    },
    {
      id: 3,
      text: 'Shopping',
      day: 'Feb 2',
      reminder: false,
    },
  ])

  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task))
  }

  return (
    // Everything must be in one element
    // You can have just <> </> className is for styling
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {/* showAddTask if it is true */}
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Task' }
    </div>
  ) 
}

export default App