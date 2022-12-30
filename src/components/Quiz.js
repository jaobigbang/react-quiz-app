import { useContext,useEffect,useState } from 'react'
import { DataContext } from '../App'
import QuestionsData from '../data/QuestionsData'
const Quiz = ()=>{
    const [currentQuestion, setCurrentQuestion] = useState(0)//get current question
    const [selectChoice, setSelectChoice] = useState("")//get choice
    const {score,setScore,setAppState} = useContext(DataContext)//pull data from DataContext
    
    useEffect(() => {//Checking the answer
        checkAnswer()
    }, [selectChoice])//eslint-disable-line react-hooks/exhaustive-deps
    
    const checkAnswer = ()=>{//check if the answer is correct
        if(selectChoice !== ""){
            if(selectChoice === QuestionsData[currentQuestion].answer){
                setScore(score+1)
                nextQuestion()
            }else{
                console.log("ผิด")
                nextQuestion()
            }
        }
    }
    const nextQuestion = ()=>{//It takes the current question and adds one to it
        setSelectChoice("") //clear choice
        if(currentQuestion === QuestionsData.length-1){//check if it is the last question
            setAppState("score")
        }else{
            setCurrentQuestion(currentQuestion+1)
        }
    }
    return(
        <div className="quiz">
            <h1>{QuestionsData[currentQuestion].question}</h1>
            <div className='choices'>
                <button onClick={()=>setSelectChoice("A")}>{QuestionsData[currentQuestion].A}</button>
                <button onClick={()=>setSelectChoice("B")}>{QuestionsData[currentQuestion].B}</button>
                <button onClick={()=>setSelectChoice("C")}>{QuestionsData[currentQuestion].C}</button>
                <button onClick={()=>setSelectChoice("D")}>{QuestionsData[currentQuestion].D}</button>
            </div>
            <p>{`${currentQuestion+1}/${QuestionsData.length}`}</p>{/* show current question */}
        </div>
    )
}
export default Quiz 