'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './page.module.css';


export default function Home() {
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const userData = {
        "admin": "admin123",
        "member": "member123"
    } as any;

    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        if (data.password === userData[data.username]) {
            if (data.username === "admin") {
              router.push('/admin');
            } else if (data.username === "member") {
              router.push('/selection');
            }
        } else {
          setErrorMessage('Username or password is invalid');
          var resetForm = document.getElementById('login-form') as HTMLFormElement;
          resetForm.reset();
        }
    }

    function ErrorMessage() {
        if (errorMessage) {
            return(
                <div className={styles.error}>{ errorMessage }</div>
            )
        }
    }

    return(
    <div className={styles.container}>
        <form id="login-form" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.title}>Intake Login</h1>
            <label>
                <input required placeholder="Username" type="text" {...register("username")}/>
            </label>
            <label>
                <input required placeholder="Password" type="password" {...register("password")}/>
            </label>
            <ErrorMessage></ErrorMessage>
            <button className={styles.button} type="submit">Log in</button>
        </form>
    </div>
    )
}
