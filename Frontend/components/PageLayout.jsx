import React, { useEffect } from 'react'
import Footers from './Footers'
import Header from './Header'
import PropTypes from "prop-types"
import { client } from '../lib/client'
import { useStateContext } from '../context/StateContext'

export function PageLayout ({children}) {
    
const {categories}=useStateContext()
  return (
    <div>
    <Header categories={categories}/>
    {children}
    <Footers/>
    </div>
  )
}

PageLayout.propTypes={
    children:PropTypes.any
}


  