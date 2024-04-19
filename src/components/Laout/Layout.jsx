import Header from "../Header/Header";
import ToolBar from "../ToolBar/ToolBar";



function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <ToolBar />
        </>
    )
}

export default Layout