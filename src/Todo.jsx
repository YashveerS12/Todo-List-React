import { useState } from "react";
import {v4 as uuidv4}from "uuid";
import './App.css';
export default function TodoList(){
    let[todo,settodo]=useState([{task:"Sample-task", id: uuidv4()}]);
    let[newtodo,setnewtodo]=useState("");

    let addNewtask=()=>{
        settodo((prevtodo)=>{
            return [...prevtodo,{task:newtodo,id:uuidv4()}];
        })
    };

    let updatetodovalue=(event)=>{
        setnewtodo(event.target.value);
    }
    let deletetodo=(id)=>{
        settodo((prevtodos)=>todo.filter((prevtodos)=>prevtodos.id !=id));
    }

    let upperCase=()=>{
        settodo((todo)=>(
            todo.map((todo)=>{
                return {
                    ...todo,task:todo.task.toUpperCase(),
                };
            })
        ));
    };

    let upperCaseOne=(id)=>{
        settodo((todo)=>(
            todo.map((todo)=>{
                if(todo.id==id){
                return {
                    ...todo,task:todo.task.toUpperCase(),
                };
            }
            else{
                return todo;
            }
            })
        ));

    }
 return (
    <>
    <div className="container">
       <p className="task"> Enter a task: &nbsp; &nbsp; <input type="text" value={newtodo} onChange={updatetodovalue} placeholder="Enter a task"></input></p>
        <br></br>
        <button onClick={addNewtask}>Add Task</button>
        <br></br>

        <hr></hr>
        <h2 className="task">Tasks Todo</h2>
        <ul>
            {
                todo.map((todo)=>(

                 <div className="to"> <li className="todo"key={todo.id}><span >{todo.task}</span></li>
                 <button className="button-task" onClick={ ()=>deletetodo(todo.id)}>Delete</button> </div>
                  
                  
                ))
            }
        </ul>
        <button onClick={upperCase}>UpperCase</button>
        
    </div>
    
    </>
 )   
}