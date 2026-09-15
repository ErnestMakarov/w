import { useState } from 'react'
 
export default function Home() {
  const [tasks, setTasks] = useState<string[]>([])
  const [taskInput, setTaskInput] = useState('')

  function HandleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskInput(event.target.value)
  }

  function HandleAdd() {
    setTasks([...tasks, taskInput])
    setTaskInput('')
  }

  return (
    <section>
      <p className="bg-gray-700 text-white text-center py-2">
        {new Date().toLocaleDateString('ru-RU')}
      </p>
      <div>
        <div className="p-4 display flex gap-2">
          <input className='w-full h-10 border border-gray-300 rounded-xl p-2' type="text" placeholder="task..." value={taskInput} onChange={HandleChange} />
          <button className="bg-green-300 px-4 py-2 rounded-xl hover:bg-green-400 cursor-pointer" onClick={HandleAdd}>add</button>
        </div>
        <div className="mb-4">
          {tasks.map((task, index) => (
            <div key={index} className="flex items-center gap-2 p-4 border-b border-gray-300 justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <p className="text-gray-500 text-sm">{index + 1}.</p>
                <p className="text-gray-700 font-medium">{task}</p>
              </div>
              <p>{new Date().toLocaleDateString('ru-RU')}</p>
            </div>
          ))}
      </div>
    </div>
    </section>
  )
}
