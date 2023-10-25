import React, { useState } from "react";
import { incrementCounter, decrementCounter, removeTask, updateTask} from '../features/taskSlice'
import { useDispatch } from 'react-redux'


export default function Task({task}) {
  const dispatch = useDispatch()
  const [edit , setEdit] = useState(false)
  const [editValue, setEditValue] = useState(task.name)

  const addPerson = (id) => {
    dispatch(incrementCounter(id))
  }

  const removePerson = (id) => {
    dispatch(decrementCounter(id))
  }

  return (
    <>
    <div className="d-block m-2">
      <h4 className="d-inline">
       <div style={{userSelect: "none"}} role="button" onClick={() => addPerson(task.id)} className="badge bg-primary mx-1">+</div>
       <div style={{userSelect: "none"}} role="button" onClick={() => removePerson(task.id)} className="badge bg-primary mx-1">-</div>
      </h4>
       <span className={`badge ${task.counter===0 ? "bg-danger" : "bg-primary"} mx-1`} style={{width: "150px"}}>{task.counter===0 ? "Zero Persons" : `${task.counter} Person`}</span>
       {
        edit ? (
          <>
          <input onChange={(e) => {setEditValue(e.target.value)}} value={editValue} type="text" />
          <button onClick={() => {setEdit(!edit); dispatch(updateTask({id: task.id, name: editValue}))}} className="btn btn-primary mx-1">Save</button>
          </>
          ) : (
          <>
            <span className="mx-1">{task.name}</span>
            <button onClick={() => setEdit(!edit)} className="btn btn-primary mx-1">Edit</button>
          </>
            )
       }
       <button onClick={() => dispatch(removeTask(task.id))} className="btn btn-danger mx-1">Delete</button>
       </div>
    </>
  );
}
