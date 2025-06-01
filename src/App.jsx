import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-center p-[50px] text-[44px] font-bold text-[var(--color-primary)]">
          WELCOME TO THE PROJECT
        </h1>
      </div>
    </>
  );
}

export default App;
