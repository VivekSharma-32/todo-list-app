import React from "react";
import { FaPlus } from "react-icons/fa6";
import TodoItem from "./TodoItem";

const Todo = () => {
  return (
    <div class="relative flex flex-col px-8 py-20 bg-white w-[421px] m-auto rounded-3xl my-8">
      <div>
        <h1 className="font-semibold text-start text-[28px]">To Do List</h1>
      </div>
      <TodoItem />
      <div className="absolute bottom-0 right-0 my-8 mx-2 w-[70px] h-[70px]">
        <button className="btn bg-gray-700 p-4 rounded-full  mx-auto bg-[#E53170]">
          <FaPlus size={24} color="white" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
