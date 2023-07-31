import React, { useState, useEffect } from "react";

const api="https://express-blog-xa7v.onrender.com/todo/users/perd007";

const tarea ={
    label:"",
    done:true
}
const List = () => {

    const [todolist, setTodoList] = useState([tarea]);
    
    const getTodoListApi= async () => {
            const response= await fetch(api);
            const data = await response.json();
            setTodoList(data)
          console.log(data);

    }

const updateApi = async  (array)=>{
    //actualizamos la api pasando la lista actualizada todolist
    const response= await fetch(api,{
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(array)
    });
    const data = await response.json(); 
    //console.log(data);
    if(response.ok){
        getTodoListApi();
    }  
}

    const handleChange =(event) => {
        if (event.key === "Enter") {
            //agregamos los valores de la lista a newList
            const NewList = [...todolist,{ [event.target.name]: event.target.value, done: true}];
            //actualizamos la api
            updateApi(NewList);
            //limpiamos el input          
            event.target.value = "";
            
        }
    }

    //eliminamos el elemento seleccionado
    const deleteList = async (key) => {
        const updateTodoList = todolist.filter((element, index) => index !== key);
        updateApi(updateTodoList);
        
    }

    //cargamos la api al inicio
    useEffect(()=>{
        getTodoListApi();
    },[])
       
    

    return (
        <>
            <div className="input-group mb-3">
                <input type="text" name="label" onKeyDown={handleChange} className="form-control" />
            </div>
            <ul className="list-group">

                {todolist.map((element, index) => {
                    return (
                        <li className="list-group-item d-flex justify-content-between" key={index} >
                            {element.label}
                            <button type="button" onClick={() => deleteList(index)} className="btn-close" aria-label="Close"></button></li>
                    );
                })
                }
        <li className="list-group-item d-flex justify-content-between text-bg-info fw-bold" >{todolist.length} Items</li>
            </ul>

        </>
    );
}
export default List;