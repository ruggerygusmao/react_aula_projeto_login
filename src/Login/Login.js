import React from "react";

export default function Login(){

    return(
        <>
        <div className="container">
            <div className="item1">
                <img src="https://revendedor.rmluxo.com.br/assets/images/login-img.png" alt="login.png"></img>
            </div>

            <div className="item2">
                <p>Member Login</p>
                <form className="form">
                        <div className="usuario">
                            <input type="text" className="input" name="username" placeholder="Email" />
                        </div>
                        <div className="senha">
                            <input type="password" className="input" name="senha" placeholder="Password" />
                        </div>
                        <button className="botao">Login</button>
                        <p className="texto">
                            <a target="_blank" href="http://google.com">Forget username / Password? </a>
                        </p>
                </form>
            </div>
        </div>
        </>
    );
}