import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"

export default function RootLayout() {
  return (
    <main className="root-layout">
      <Navbar />

      <main className="body">
        <Outlet />
      </main>
    </main>
  )
}
