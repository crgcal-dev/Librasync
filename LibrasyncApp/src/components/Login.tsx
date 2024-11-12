import { useState, useEffect } from "react";
import logo from '../assets/login-logo.png'

const Login = () => {
    const [time, setTime] = useState("");

    const loginTime = () => {
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        setTime(h + ":" + m + ":" + s);
    }

    const checkTime = (i: any) => {
        if (i < 10) { i = "0" + i }
        return i;
    }

    useEffect(() => {
        const timer = setInterval(() => loginTime(), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col h-screen w-screen">
            <div className="flex h-screen w-screen justify-center items-center">
                <form className="border flex flex-col p-5 gap-3 w-[30rem] h-96 bg-sky-500 rounded-md">
                    <div className="flex items-center mb-4">
                        <img className="h-16 w-14" src={logo} alt="" />
                        <p className="text-white font-semibold text-xl pl-2">librasync</p>
                    </div>
                    <p className="font-bold text-3xl text-center text-white mb-4">{time}</p>
                    <input className="border p-2 rounded-md text-sm" type="email" placeholder="Enter username" required/>
                    <input className="border p-2 rounded-md text-sm" type="password" placeholder="Enter password" required/>
                    <div className="flex flex-row gap-2">
                        <input type="checkbox" name="value1" id="value1"/>
                        <label className="text-white text-sm" htmlFor="value1">Stay signed in</label>
                    </div>
                    <input className="border bg-sky-500 text-white px-5 py-2 rounded-sm self-center cursor-pointer mt-2 text-sm" type="submit" value="Login" />
                </form>
            </div>
        </div>
    )
}

export default Login;
