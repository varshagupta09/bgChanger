import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-5 inset-x-0">
          <div className="flex flex-wrap justify-between gap-4  px-20 py-5">
            <button
              onClick={() => setColor("red")}
              className="w-24 h-12 rounded-2xl shadow-xl"
              style={{ backgroundColor: "red" }}
            ></button>
            <button
              onClick={() => setColor("green")}
              className="w-24 h-12 rounded-2xl shadow-xl"
              style={{ backgroundColor: "green" }}
            ></button>
            <button
              onClick={() => setColor("blue")}
              className=" w-24 h-12 rounded-2xl shadow-xl "
              style={{ backgroundColor: "blue" }}
            ></button>
            <button
              onClick={() => setColor("olive")}
              className="w-24 h-12 rounded-2xl shadow-xl "
              style={{ backgroundColor: "olive" }}
            ></button>
            <button
              onClick={() => setColor("gray")}
              className="w-24 h-12 rounded-2xl shadow-xl "
              style={{ backgroundColor: "gray" }}
            ></button>
            <button
              onClick={() => setColor("yellow")}
              className=" w-24 h-12 rounded-2xl shadow-xl "
              style={{ backgroundColor: "yellow" }}
            ></button>
            <button
              onClick={() => setColor("pink")}
              className="w-24 h-12 rounded-2xl shadow-xl "
              style={{ backgroundColor: "pink" }}
            ></button>
            <button
              onClick={() => setColor("purple")}
              className=" w-24 h-12 rounded-2xl shadow-xl "
              style={{ backgroundColor: "purple" }}
            ></button>
            <button
              onClick={() => setColor("lavender")}
              className="w-24 h-12 rounded-2xl shadow-xl "
              style={{ backgroundColor: "lavender" }}
            ></button>
            <button
              onClick={() => setColor("white")}
              className="w-24 h-12 rounded-2xl shadow-xl "
              style={{ backgroundColor: "white" }}
            ></button>
            <button
              onClick={() => setColor("black")}
              className="w-24 h-12 rounded-2xl shadow-xl "
              style={{ backgroundColor: "black" }}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
