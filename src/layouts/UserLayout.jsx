import NavbarUser from './NavbarUser'
import Footer from "./Footer"

const UserLayout = ({ children }) => {
  return (
    <div>
        <NavbarUser />
          <main className="flex-grow-1 w-100" style={{ padding: "2rem" }}>
            {children}
          </main>
        <Footer />
    </div>

  )
}

export default UserLayout
