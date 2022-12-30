import { useContext,useEffect,useState } from 'react'
import { DataContext } from '../App'
import QuestionsData from '../data/QuestionsData'
const Quiz = ()=>{
    const [currentQuestion, setCurrentQuestion] = useState(0)
    //  สร้างตัวแปรเก็บคำตอบที่เลือก
    const [selectChoice, setSelectChoice] = useState("")
    const {score,setScore} = useContext(DataContext)
    // ใช้ useEffect เพื่อตรวจสอบคำตอบที่เลือก
    useEffect(() => {
        checkAnswer()
    }, [selectChoice])

    const checkAnswer = ()=>{
        //  ตรวจสอบคำตอบในQuestionsData กับคำตอบที่เลือก  
        if(selectChoice !== ""){
            if(selectChoice === QuestionsData[currentQuestion].answer){
                setScore(score+1)
            }else{
                console.log("ผิด")
            }
        }
    }
    const nextQuestion = ()=>{
        setCurrentQuestion(currentQuestion+1)
    }
    return(
        <div className="quiz">
            <h1>{QuestionsData[currentQuestion].question}</h1>
            {/*  แสดงคำตอบ 4 ข้อ */}
            <div className='choices'>
                <button onClick={()=>setSelectChoice("A")}>{QuestionsData[currentQuestion].A}</button>
                <button onClick={()=>setSelectChoice("B")}>{QuestionsData[currentQuestion].B}</button>
                <button onClick={()=>setSelectChoice("C")}>{QuestionsData[currentQuestion].C}</button>
                <button onClick={()=>setSelectChoice("D")}>{QuestionsData[currentQuestion].D}</button>
            </div>
            {/*  แสดงจำนวนข้อที่ทำ*/}
            <p>{`${currentQuestion+1}/${QuestionsData.length}`}</p>
        </div>
    )
}
export default Quiz 