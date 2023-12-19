import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"


import { Users } from "../Users/Users"
const {Wrapper}={
        Wrapper:styled.div`
        border-radius: 30px;
        margin: 50px auto;
        width: 80%;
        border: 2px solid rgb(255, 255, 255);
        box-shadow: 4px 4px 6px rgba(0,0,0,.3);
        text-align: center;
        /* padding: 20px; */
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    `,
    
}

export const Main =()=>{
    return(
        <>
        <Wrapper>
            <Users/>
        </Wrapper>
        </>
    )
}