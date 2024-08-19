"use client";

import style from './page.module.css';

interface QuestionProps {
    id: string;
    question: string;
    index: number;
}

interface Question {
    question: string;
    type: string;
    options: string[];
}

const QuestionType = {
    INPUT: "input",
    MCQ: "mcq"
}


const Question: React.FC<QuestionProps> = ({ id, question, index }) => {
    const q : Question = JSON.parse(question);

    switch (q.type) {
        case QuestionType.MCQ:
            return(
                <div className={style.question}>
                    <div className={style.questionText}>{ index }. {q.question}</div>
                    {q.options.map((choice, index) => (
                        <label className={style.option} key={index}>
                            <input type="checkbox" key={choice} value={choice}/>
                                { choice }  
                        </label>
                    ))}
                </div>
            )
        default:
            return(
                <div className={style.question}>
                    <div className={style.questionText}>{ index }. {q.question}</div>
                    <input id={id} className={style.inputTextQuestion} type="text" required></input>
                </div>
            )
    }
}

export default Question;