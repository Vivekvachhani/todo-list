import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./App.css";
import TodoList from "./TodoList";
import { useDispatch, useSelector } from "react-redux";
import { Add_Todo, checkitem,cleardata } from "./actions/index";
import { deletetodo } from "./actions/index";

function Home() {
  const Data = useSelector((state) => state.allUser);

  const [userId, setuserId] = useState();
  const histroy = useHistory();
  const dispatch = useDispatch();
  const [todolist, setTodolist] = useState({ taskName:"",complete:false});

  const logout = () => {
    localStorage.removeItem("loggedUsed");
    histroy.push("./Login");
  };

  const InputEvent = (e) => {
    setTodolist({ ...todolist,taskName:e.target.value});
  };
const clearAllData=(userId)=>{
dispatch(cleardata(userId));
}
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("loggedUsed"));
    const userIndex = Data.findIndex(
      (_) => _.email === userData.email && _.pwd === userData.pwd
    );
    setuserId(userIndex);
  }, []);

  // useEffect(() => {
  //   if (userId || userId === 0) {
  //     console.log(Data[userId].todo);
  //     setList(Data[userId].todo);
  //   }
  // }, [userId, Data]);   .     
  const handleComplete = (id) => {
    dispatch(checkitem(id, userId));
  };
  const deleteitem = (id) => {
    console.log(id);
    dispatch(deletetodo(id, userId));

    // updateData(list.filter((arr, index) => index !== id));
  };

  // const updateData = (data) => {
  //   setList(data);
  //   console.log("data", data);
  //   const allData = JSON.parse(localStorage.getItem("listdata") || "[]");
  //   console.log("alldata", allData);

  //   const updatedData = allData.map((_) => {
  //     if (+_.id === userId) _.todo = data;
  //     return _;
  //   });
  //   console.log("op", updatedData);
  //   localStorage.setItem("listdata", JSON.stringify(updatedData));
  // };

  if (!userId && userId !== 0) return null;
  return (
    <>
      <div className="todo-main">
        <div className="todoList">
          <h2 className="heading"> To-Do List </h2>
          <input
            type="text"
            placeholder="Add Task"
            value={todolist.taskName}
            onChange={InputEvent}
            required
          />
          <button
            type="submit"
            className="add-btn"
            onClick={() =>{ dispatch(Add_Todo(userId, todolist)); setTodolist({taskName:"",complete:false})}}
          >
            +
          </button>
          
          <p id="pending-item">You have  Pending Task </p>
          <ol>
            {Data[userId].todo.map((data, index) => {
              // console.log("index", index);
              console.log(data)
              if (data.complete === true) return;
              return (
                <>
                <TodoList
                complete={false}
                  id={index}
                  key={index}
                  onselect={() => deleteitem(index)}
                  checkComplete={() => handleComplete(index)}
                  List={data}
                />
                </>
              );
            })}
          </ol>
          <p id="pending-item">You have  complete Task </p>
          <ol>
            {Data[userId].todo.map((data, index) => {
              if (data.complete === false) return;
              return (
                <>
                <TodoList
                  complete={true}
                  id={index}
                  key={index}
                  onselect={() => deleteitem(index)}
                  checkComplete={() => handleComplete(index)}
                  List={data}
                />
                </>
              );
            })}
          </ol>
          <div className="footer">
      
            <span type="clear" onClick={()=>clearAllData(userId)}>Clear All</span>
          </div>
        </div>
        <button className="logout-btn" onClick={logout}>
          Log Out
        </button>
      </div>
    </>
  );
}

export default Home;
