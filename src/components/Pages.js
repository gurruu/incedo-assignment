import { useContext } from "react"
import Header from "./Header"
import { themeContext } from "./ThemeContextProvider"


function Pages(){
    const themeCtx=useContext(themeContext)
    return (
        <>
        <div style={themeCtx.theme==='light'?{backgroundColor:'whitesmoke'}:{backgroundColor:'black'}}>
            <Header/>
            <h1>From Page Component</h1>
        </div>
        </>
    )
}
export default Pages