import React, { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const [task, SetTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, detail });

    SetTask(copyTask);
    setTitle("");
    setDetail("");
  };

  const dltNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1); // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements. 

    SetTask(copyTask);
  };

  return (
    <div className="h-full lg:h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-10 p-10 lg:w-1/2 flex-col items-start"
      >
        <img
          className="h-65"
          src="https://static.vecteezy.com/system/resources/thumbnails/047/247/652/small/notepad-icon-with-pencil-icon-3d-rendering-illustration-png.png"
          alt=""
        />

        {/* Heading Inputs */}
        <input
          className="px-5 w-full font-medium py-2 border-2 rounded outline-none"
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* Detailed Notes */}
        <textarea
          className="px-5 w-full font-medium h-32 flex items-start flex-row py-2 h-20 border-2 rounded outline-none"
          placeholder="Write Details"
          type="text"
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value);
          }}
        />
        <button className="bg-white font-medium w-full text-black rounded px-5 py-2 items-center outline-none ">
          Add Notes
        </button>
      </form>

      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap justify-start items-start gap-5 mt-5 overflow-auto h-full">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="h-52 w-40 text-black p-4  bg-white rounded-2xl bg-[url('https://i.pinimg.com/736x/a6/6a/96/a66a96f8849598adef01ecf69fda18d6.jpg')]"
              >
                <h2
                  className="flex justify-end cursor-pointer active:scale-95"
                  onClick={(idx) => {
                    dltNote(idx);
                  }}
                >
                  <X />
                </h2>
                <h3 className="leading-tight text-xl font-bold">
                  {elem.title}
                </h3>
                <p className="mt-2 leading-tight font-medium text-gray-500 ">
                  {elem.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
