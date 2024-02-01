import { themeContext } from "./ThemeContextProvider"
import { useContext } from "react"

function Header(){
    const themeCtx=useContext(themeContext)
    return (
        <>
        <div>
            <h1>From Header Component</h1>
            <button onClick={themeCtx.toggleTheme}>Click to {themeCtx.theme==='light'?'hide':'see'} Text!</button>
        </div>
        </>
    )
}
export default Header