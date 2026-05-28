import { Outlet } from "react-router-dom";
import Header from "../Header/header";
import Footer from "../Footer/footer";

function Layout({ children }) {
    return (
        <div>
            <Header />
            <main>
              {children}
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;