import "./home.css"
import { useEffect } from "react"

import Button from '../button/button';
import { useNavigate } from "react-router-dom";

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
                <header>
                    <Button onClick={handleLogout} className="buton-logout" text="Logout" />
                </header>
            </main>
        </>
    )

}

export default Home
