import { useState } from 'react';
import "../css/login.css"

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginButton = () => {
        console.log(email, password);
    };
    const googleButton = () => {
        console.log("login with google");
    };

    return(
        <div className="container">
            <div className="kiri">
                <h1>Pantau Pengeluaranmu Atur Keuangan Harian Jadi Lebih Hemat!</h1>
            </div>
            <div className="kanan">
                <h2>Halo!</h2>
                <p>Kelola keuanganmu dengan mudah, aman dan transparan</p>
                <input type="Email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type='Password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <p>Forgot password?</p>
                <button onClick={loginButton}>Login</button>
                <p>or</p>
                <button onClick={googleButton}>Sign with Google</button>
            </div>
        </div>
    );
}

export default Login;