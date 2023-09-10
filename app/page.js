"use client"

import Topbar from '@/components/Topbar'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Main from '@/components/Main'
import MainJs from './mainjs'


export default function Home() {
MainJs();
  return (
<>
<Topbar/>
<Header/>
<Hero/>
<Main/>
<div id="preloader"></div>
  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
</>

)


}
