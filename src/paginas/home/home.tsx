// Imports de CSS
import "./home.css"

// Imports de React
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

// Imports de componentes
import Header from "../../componentes/header/header";


const Home = () => {
    useEffect(() => {
        document.title = "Newton | Home"
    }, [])
    const navigate = useNavigate()
    const handleLogout = async () => {
        try {
            const res = await fetch("/api/logout", {
                method: "GET",
                credentials: "include",
                headers: { "Content-Type": "application/json" }
            })

            if (!res.ok) {
                console.error("Error during logout")
                return
            }

            navigate("/")
        } catch (err) {
            console.error("Error during logout:", err)
        }
    }


    return (
        <>
            <main className="home">
                <Header functionButton={handleLogout} titleClass="title-home" title="Welcome, " textButton="Logout" buttonClass="buton-home" />
            </main>
        </>
    )

}

export default Home
