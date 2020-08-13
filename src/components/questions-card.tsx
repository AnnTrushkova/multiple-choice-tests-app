import React from 'react'
import {AnswerObject} from '../App'
import '../App.scss'


type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

const QuestionsCard: React.FC<Props> = (props) => {

    const {question, answers, callback, userAnswer, questionNr, totalQuestions} = props

    return (
        <div className="questions-content">
            <p className="question-number">
                Question: {questionNr} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}} className="question-text"/>

            <div>
                {answers.map((answer) => (
                    <div key={answer}>
                        <button
                            className="select-button"
                            disabled={!!userAnswer}
                            onClick={callback}
                            value={answer}
                        >
                            <span dangerouslySetInnerHTML={{__html: answer}}/>
                        </button>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default QuestionsCard
