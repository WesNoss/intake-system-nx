import { Pool } from 'pg';
import { NextRequest, NextResponse} from 'next/server';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export async function POST(req: NextRequest) {
    try {
      //TODO Insert into questionnaire_submissions, user_responses table
      //Parse request body to account for dynamic nature of questionnaire, logic could either be here or in page.tsx file
      const result = await pool.query('');

    } catch (error) {
      console.error('Error processing request:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }