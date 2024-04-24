import { useForm } from 'react-hook-form';
import CSS from './index.module.css'
import { useNavigate } from 'react-router-dom';

function LoginPage({ setIsLoggedIn }) {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const nav = useNavigate()

    async function submit() {
        await setIsLoggedIn(true)
        nav('/')
    }


    return (
        <>
            <div className={CSS.loginContainer}>
                <div className={CSS.loginForm}>
                    <h1>Sign in</h1>
                    <div className={CSS.medias}>
                        <div className={CSS.facebook}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>
                        </div>
                        <div className={CSS.google}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M386.1 228.5c1.8 9.7 3.1 19.4 3.1 32C389.2 370.2 315.6 448 204.8 448c-106.1 0-192-85.9-192-192s85.9-192 192-192c51.9 0 95.1 18.9 128.6 50.3l-52.1 50c-14.1-13.6-39-29.6-76.5-29.6-65.5 0-118.9 54.2-118.9 121.3 0 67.1 53.4 121.3 118.9 121.3 76 0 104.5-54.7 109-82.8H204.8v-66h181.3zm185.4 6.4V179.2h-56v55.7h-55.7v56h55.7v55.7h56v-55.7H627.2v-56h-55.7z" /></svg>
                        </div>
                        <div className={CSS.linkedin}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg>
                        </div>
                    </div>

                    <p className={CSS.otherWay}>or use your email account:</p>
                    <div className={CSS.inputs}>
                        <div className={CSS.input}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" /></svg>
                            <input {...register("email", {
                                required: "email is required",
                                validate: (value) => {
                                    if (!value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
                                        return "invalid email!"
                                    }
                                    return true
                                }
                            })} type="email" placeholder='Email' />
                        </div>
                        {errors.email && <p className={CSS.error}>{errors.email.message}</p>}
                        <div className={CSS.input}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" /></svg>
                            <input {...register("password", {
                                required: "password is required",
                                minLength: {
                                    value: 8,
                                    message: "Password must have at least 8 characters"
                                }
                            })} type="password" placeholder='Password' />
                        </div>
                        {errors.password && <p className={CSS.error}>{errors.password.message}</p>}
                    </div>
                    <a href="#">Forget your password?</a>
                    <button className={CSS.submit} onClick={handleSubmit(submit)}>SIGN IN</button>
                </div>
            </div>
        </>
    )
}

export default LoginPage;