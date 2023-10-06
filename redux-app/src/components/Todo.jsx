import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../store/todoSlice";

function Todo() {
  const [inputTodo, setinputTodo] = useState("");
  const dispatch = useDispatch();

  const text = useSelector((state) => state.todo.todos.slice(1, state.todo.todos.length));

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodo(inputTodo));
    setinputTodo('')
  };

  return (
    <div className="text-center my-8">
      <div>
        <h2 className="text-2xl">This is input todo</h2>
        <form onSubmit={handleSubmit} className="my-2">
          <input
            value={inputTodo}
            onChange={(e) => setinputTodo(e.target.value)}
            className="border w-80 h-10 border-4 p-2"
            type="text"
            placeholder="add text"
          />
          <button
            type="submit"
            className="font-bold w-20 text-2xl text-green-700 mx-2  border-4 border-indigo-600"
          >
            ADD
          </button>
        </form>
      </div>
    <div className="text-ceter my-8">
        {text.map((e) => (
          <ul key={e.id}>
            <li  className="text-2xl">
              {e.text}
              <button onClick={()=>dispatch(removeTodo(e.id))} className=" mx-10 p-1 border-2 text-red-700 mx-2 border-indigo-600">
                delete
              </button>
            </li>
          </ul>
        ))}
      </div>
     

    </div>
  );
}

export default Todo;
