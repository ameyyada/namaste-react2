import React from "react"
import ReactDOM from "react-dom/client"





const jsxheading=<h1 className="heading">Namaste react using jsx</h1>

const Title=()=>{

    return(
        <div>
            {jsxheading}
            <h1>this is Title component</h1>
        </div>

    )
}


const Heading=()=>{


    return(
        <div>
            <Title />
            {jsxheading}
            <h1>this is functional component</h1>
        </div>

    )
}



const Root= ReactDOM.createRoot( document.getElementById("root"))





Root.render(<Heading/>)

