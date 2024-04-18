import { useState } from "react"

const Footer  = ({changeCounter}) => {

    return(
        <div className="footer-con">
            <div>
                <button  type="button" onClick={() => {
                    changeCounter(1)
                }}>1</button>
                <button type="button" onClick={() => {
                    changeCounter(10)
                }}>10</button>
                <button type="button" onClick={() => {
                    changeCounter(100)
                }}>100</button>
                <button  type="button" onClick={() => {
                    changeCounter(-100)
                }}>-100</button>
                <button  type="button" onClick={() => {
                    changeCounter(-10)
                }}>-10</button>
                <button  type="button" onClick={() => {
                    changeCounter(-1)
                }}>-1</button>
            </div>
        </div>
    )
}

export default Footer