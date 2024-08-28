// import { useEffect } from 'react'
// import styles from './page.module.css'
// export const runtime = "edge";
// export default async function Home() {
//   const res = await fetch(`https://w2a.auth.la/info`)
//   const resData: any = await res.json()

//   if (!posts) {
//     return <>还没有数据哟</>
//   }
//   return (
//     <>
//       <div>名字：{posts?.name}</div>
//       <div>ICON：<img src={posts?.desktop_icon?.src} /></div>
//       <div>图片：</div>
//       {posts?.screenshot?.map((item: any, i: number) => <img key={i} src={item.src} />)}
//     </>
//   )
// }


'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
export default function Home() {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(`https://w2a.auth.la/info`)
      let data = await res.json()
      setPosts(data.data)
    }
    fetchPosts()
  }, [])

  if (!posts) return <div>Loading...</div>

  return (
    <>
      <div>名字：{posts?.name}</div>
      <div>ICON：<Image src={posts?.desktop_icon?.src} alt="Icon" layout="fill" /></div>
      <div>图片：</div>
      {posts?.screenshot?.map((item: any, i: number) => <Image key={i} src={item?.src} alt="Icon" layout="fill" />)}
    </>
  )
}