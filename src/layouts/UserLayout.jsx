import NavbarUser from './NavbarUser'
import Footer from "./Footer"

const UserLayout = ({ children }) => {
  return (
    <div>
        <NavbarUser />
        <main className="flex-grow-1 container my-4">
            {children}
        </main>
        <Footer />
    </div>

  )
}

export default UserLayout
