import React from 'react'
import {Redirect,Route} from 'react-router-dom'

const Protected =({Cmp,...rest})=> (
    localStorage.getItem('loggedUsed') ?
<Route component={Cmp} {...rest}/>
:<Redirect to="/Login"/>
)  

export default Protected
