import { createContext, useState } from "react";
import Menu from "./components/Menu";
import Score from "./components/Score";
import Quiz from "./components/Quiz";

import './App.css'

//สร้าง context
export const DataContext = createContext();

function App() {
  const [appState, setAppState] = useState("menu");
  const [score, setScore] = useState(0);
  return (
    //ส่งค่า appState และ setAppState ไปยัง component ที่เรียกใช้
    <DataContext.Provider value={{ appState, setAppState,score,setScore }}> 
      <div className="App">
        <h1>Web Development Quiz</h1>
        {appState === "menu" && <Menu />}
        {appState === "quiz" && <Quiz />}
        {appState === "score&&" && <Score />}
      </div>
    </DataContext.Provider>
  );
}
export default App;
