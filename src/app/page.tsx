'use client'
import { Fragment } from 'react'
import SideBar from '@/components/layout/sidebar/sidebar'
import Banner from '@/components/layout/banner/banner'
import { Card } from '@/components/layout/card/card'
import { Whatsapp } from '@/components/layout/whatsapp/whatsapp'


export default function Home() {
 
  return (
    <Fragment>
      <div style={{display: 'flex'}}>
        <div style={{width: '240px'}}>
          <SideBar />
        </div>
        <div style={{width: 'calc(100% - 240px)'}}>
          <Banner />
          <Card />
          <Whatsapp />
        </div>
      </div>
    </Fragment>
  )
}
