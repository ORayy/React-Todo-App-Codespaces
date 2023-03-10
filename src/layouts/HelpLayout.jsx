import { NavLink, Outlet } from "react-router-dom"
// import Help from "../pages/Help"

import '../styles/help.css'


export default function HelpLayout() {
    return (
        <main className="help-main">

            <section className="help-section">
                <h1>Need Help?</h1>
                <h2>Leave a Query Or Get in Touch</h2>

                <nav className="help-link">
                    <NavLink to='faq'>FAQ</NavLink>
                    <NavLink to='contact'>CONTACTS</NavLink>
                </nav>

                <main className="main-help-content">
                    <Outlet />
                </main>
            </section>

        </main>
    )
}
