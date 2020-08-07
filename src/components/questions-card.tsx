import React from 'react'
//types
import {AnswerObject} from '../App'

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
        <div>
            <p className="number">
                Question: {questionNr} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}}/>

            <div>
                {answers.map((answer) => (
                    <div key={answer}>
                        <button
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
