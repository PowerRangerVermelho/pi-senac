import Link from "next/link";

export default function CardLogin () {
    return (
        

    <div className="login-container">
    <i className="fa-solid fa-user"></i>
    <form action="#" method="post">
        <label>Username:</label>
        <input type="text" id="username" name="username" required />
        <br />
        <label>Password:</label>
        <input type="password" id="password" name="password" required />
        <br />
        <Link href="home_projeto.html"><button type="button">Home</button></Link>
        <Link href="cadastro__profissional_projeto.html"><button type="button">Cadastro Profissional</button></Link>
    </form>
    </div>
    )
}