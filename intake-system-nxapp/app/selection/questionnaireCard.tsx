"use client";

import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import style from './page.module.css';

interface QuestionnaireCardProps {
  id: string;
  name: string;
}

const QuestionnaireCard: React.FC<QuestionnaireCardProps> = ({ id, name }) => {
  const router = useRouter();

  const navigateToQuestionnaire = () => {
    router.push(`/questionnaire/${id}`);
  };

  return (
    <button key={id} className={style.card} onClick={navigateToQuestionnaire}>
        <Image className={style.completed} src='/yes.png' alt="completed" width={15} height={15}></Image>
        <div className={style.title}>{ name }</div>
    </button>
  );
};

export default QuestionnaireCard;