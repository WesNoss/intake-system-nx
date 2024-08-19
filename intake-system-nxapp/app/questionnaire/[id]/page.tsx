import style from './page.module.css';
import { sql } from '@vercel/postgres';
import Question from './question';
import Link from 'next/link';

export default async function Questionnaire({ params }: { params: { id: string } }){
    const { id } = params;

    if (id) {
        const { rows } = await sql`SELECT q.id, q.question
        FROM questions q
        JOIN junction j ON q.id = j.question_id
        WHERE j.questionnaire_id = ${id};`;

        return(
            <div className={style.page}>
                <Link className={style.back} href="/selection">Back</Link>
                <form className={style.form} action="/api/submit" method="POST">
                    <div className={style.title}>{ id }</div>
                    <div className={style.divider}></div>
                    <div className={style.questions}>
                        {rows.map((row, index) => (
                            <Question key={index} id={row.id} question={row.question} index={index+1}></Question>
                        ))}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    } else {
        return(
            <div>Error</div>
        )
    }
}