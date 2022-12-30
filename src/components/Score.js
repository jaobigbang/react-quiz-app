import {useContext} from 'react'
import {DataContext} from '../App'
import QuestionsData from '../data/QuestionsData'
const Score = ()=>{
    const {setAppState,score,setScore} = useContext(DataContext)
    const resetQuiz = ()=>{//It sets the app state to "menu" and sets the score to 0
        setAppState("menu")
        setScore(0)
    }
    return(
        <div className="score">
            <h1>สรุปผลคะแนนสอบ</h1>
            <h2>คุณได้คะแนน {score} / {QuestionsData.length} คะแนน</h2>
            <button onClick={resetQuiz}>ทำแบบทดสอบอีกครั้ง</button>
        </div>
    )
}
export default Score 