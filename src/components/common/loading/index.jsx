import React from 'react'
import loadImg from 'asset/logo/loading.gif'

import { Load } from './style'

function Loading() {
    return (
        <Load>
            <img alt = " " src = {loadImg}/>
        </Load>
    )
} 


export default Loading