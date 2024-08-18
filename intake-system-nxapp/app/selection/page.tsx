import { sql } from "@vercel/postgres";
import QuestionnaireCard from './questionnaireCard';
import style from './page.module.css';

export default async function Selection(): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from questionnaires`;

  return (
    <div className={style.page}>
        <h1 className={style.pageTitle}>Select A Questionnaire</h1>
        <div className={style.cards}>
            {rows.map((row) => (
            <QuestionnaireCard id={row.id} name={row.name}></QuestionnaireCard>
        ))}
        </div>
    </div>
  );
}