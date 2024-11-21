import { useState, useEffect } from "react";
import logo from '../assets/login-logo.png'
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const Login = () => {
    const navigate = useNavigate();
    const [time, setTime] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const loginTime = () => {
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        setTime(h + ":" + m + ":" + s);
    }

    const checkTime = (i:any) => {
        if (i < 10) { i = "0" + i }
        return i;
    }

    useEffect(() => {
        const timer = setInterval(() => loginTime(), 1000);
        return () => clearInterval(timer);
    }, []);

    const handleLogin = async (e:any) => {
        e.preventDefault();
        
        try {
            const response = await fetch("http://localhost:5019/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });
    
            if (!response.ok) {
                throw new Error("Invalid username or password");
            }
    
            const data = await response.json();
            Cookies.set("LSID", data.token);
            navigate("/admin-catalog");
        } catch (error:any) {
            setMessage(error.message || "An error occurred");
            console.error("Failed to login.", error);
        }
    };
    
    return (
        <div className="flex flex-col h-screen w-screen">
            <div className="flex h-screen w-screen justify-center items-center">
                <form className="border flex flex-col p-5 gap-3 w-[30rem] h-[26rem] bg-sky-500 rounded-md" onSubmit={handleLogin}>
                    <div className="flex items-center mb-4">
                        <img className="h-16 w-14" src={logo} alt="" />
                        <p className="text-white font-semibold text-xl pl-2">librasync</p>
                    </div>
                    <p className="font-bold text-2xl text-center text-white">{time}</p>
                    <p className="font-bold text-3xl text-center text-white">{new Date().toLocaleString("en-US", { month: "long", day : '2-digit' , year: "numeric"  })}</p>
                    <input className="border p-2 rounded-md text-sm" 
                        type="text" 
                        placeholder="Enter username" 
                        required 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input className="border p-2 rounded-md text-sm" 
                        type="password" 
                        placeholder="Enter password" 
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="flex flex-row gap-2">
                        <input type="checkbox" name="value1" id="value1"/>
                        <label className="text-white text-sm" htmlFor="value1">Stay signed in</label>
                    </div>
                    <input className="border bg-sky-500 text-white px-5 py-2 rounded-sm self-center cursor-pointer mt-2 text-sm" 
                        type="submit" 
                        value="Login" 
                    />
                {message && <p style={{ color: "red" }}>{message}</p>}
                </form>
            </div>
        </div>
    )
}

export default Login;
