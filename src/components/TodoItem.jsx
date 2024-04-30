import React from "react";
import { GoPencil } from "react-icons/go";
import { HiOutlineTrash } from "react-icons/hi2";

const TodoItem = () => {
  return (
    <div className="mt-6 mb-32">
      <h5 className="font-semibold">This Week</h5>
      <div className="mt-4 font-normal text-[#E53170] font-medium text-[16px]">
        Monday, 12th May
      </div>
      <div className="mt-2">
        <div className="card  rounded p-2 px-4 my-2">
          <div className="flex justify-between">
            <div className="left">
              <div className="text-[18px]">Buy groceries </div>
              <div className="bg-[#FCEEF5] w-1/3 p-2 rounded mt-1 text-[12px] font-semibold">
                High
              </div>
            </div>
            <div className="right flex gap-3 pt-2">
              <GoPencil color="#E53170" size={21} className="cursor-pointer" />
              <HiOutlineTrash
                color="#E53170"
                size={21}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="card  rounded p-2 px-4 my-2">
          <div className="flex justify-between">
            <div className="left">
              <div className="text-[18px]">Buy groceries </div>
              <div className="bg-[#FCEEF5] w-1/2 p-2 rounded mt-1 text-[12px] font-normal">
                Medium
              </div>
            </div>
            <div className="right flex gap-3 pt-2">
              <GoPencil color="#E53170" size={21} className="cursor-pointer" />
              <HiOutlineTrash
                color="#E53170"
                size={21}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 font-normal text-[#E53170] font-medium text-[16px]">
        Wednesday, 14th May
      </div>
      <div className="mt-2">
        <div className="card  rounded p-2 px-4 my-2">
          <div className="flex justify-between">
            <div className="left">
              <div className="text-[18px]">Dinner with bae</div>
              <div className="bg-[#FCEEF5] w-1/3 p-2 rounded mt-1 text-[12px] font-semibold">
                High
              </div>
            </div>
            <div className="right flex gap-3 pt-2">
              <GoPencil color="#E53170" size={21} className="cursor-pointer" />
              <HiOutlineTrash
                color="#E53170"
                size={21}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="card  rounded p-2 px-4 my-2">
          <div className="flex justify-between">
            <div className="left">
              <div className="text-[18px]">Pay college fees</div>
              <div className="bg-[#FCEEF5] w-1/3 p-2 rounded mt-1 text-[12px] font-semibold">
                High
              </div>
            </div>
            <div className="right flex gap-3 pt-2">
              <GoPencil color="#E53170" size={21} className="cursor-pointer" />
              <HiOutlineTrash
                color="#E53170"
                size={21}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
