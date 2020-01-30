import React from 'react'

import Link from '../datas/Link'




export default function  linkbar() {

  return Link.map(function (link) {

      return (<a className='link-box' key={link.name}  href={link.url} >  <img src={link.image} alt={link.name} />    {link.name}</a>)

   })

}
