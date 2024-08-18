import Router from 'next/router';
import { useState } from 'react';


export default function Login() {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const userData = {
        "admin": "admin123",
        "member": "member123"
    } as any;

    const onSubmit = (data: any) => {
        if (data.password === userData[data.username]) {
            if (data.username === "admin") {
                Router.push('/admin');
            } else {
                Router.push('/selection');
            }
        }
        setErrorMessage('Username or password is invalid');
    }

    function ErrorMessage() {
        if (errorMessage) {
            return(
                <div className="error-container">{ errorMessage }</div>
            )
        }
    }

    return(
    <div className="login-page-container">
        <h1 className="login-page-title">Intake Login</h1>
        <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
            <label className="text-input">
                <input required placeholder="Username" type="text" {...register("username")}/>
            </label>
            <label className="text-input">
                <input required placeholder="Password" type="password" {...register("password")}/>
            </label>
            <ErrorMessage></ErrorMessage>
            <div className="button-container">
                <button type="submit">Log in</button>
            </div>
        </form>
    </div>
    )
}