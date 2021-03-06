import fetch from "node-fetch"

export const getAllTasksData = async() => {
  try{
    const res = await fetch(
      new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`)
    )
    const tasks = await res.json()
    const staticfilteredTasks = tasks.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    )
    return staticfilteredTasks
  }catch(err){
    alert(err)
  }
}

export const getAllTaskIds = async () => {
  try{
    const res = await fetch(
      new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`)
    )
    const tasks = await res.json()
    return tasks.map((task)=>{
      return {
        params: {
          id: String(task.id)
        }
      }
    })
  }catch(err){
     return alert(err)
  }
}

export const getTaskData = async (id) => {
  try{
    const res = await fetch(
      new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-task/${id}/`)
    )
    const task = await res.json()
    return{
      task
    }
  }catch(err){
    
  }
}