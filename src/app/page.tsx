

// 'use client'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Image from 'next/image'

export const runtime = "edge";
export default async function Home() {
  let posts: any

  const res = await axios.get(`https://w2a.w2.app/info`)
  posts = res?.data?.data
  try {
  } catch (error) {

  }
  if (!posts) {
    return <>还没有数据哟</>
  }

  return (
    <>
      <div>名字：{posts?.name}</div>
      <div style={{ position: 'relative', height: 192, width: 192 }}>ICON：<Image src={posts?.desktop_icon?.src} alt="Icon" layout="fill" /></div>
      <div>图片：</div>
      {posts?.screenshot?.map((item: any, i: number) => <div key={i} style={{ position: 'relative', height: 587, width: 330 }}> <Image src={item?.src} alt="Icon" layout="fill" /></div>)}
    </>
  )
}



// export default function Home() {
//   const [posts, setPosts] = useState<any>(null)

//   useEffect(() => {
//     async function fetchPosts() {
//       const res = await fetch(`https://w2a.auth.la/info`)
//       let data: any = await res.json()
//       setPosts(data?.data)
//     }
//     fetchPosts()
//   }, [])

//   if (!posts) return <div>Loading...</div>

//   return (
//     <>
//       <div>名字：{posts?.name}</div>
//       <div style={{ position: 'relative', height: 192, width: 192 }}>ICON：<Image src={posts?.desktop_icon?.src} alt="Icon" layout="fill" /></div>
//       <div>图片：</div>
//       {posts?.screenshot?.map((item: any, i: number) => <div key={i} style={{ position: 'relative', height: 587, width: 330 }}> <Image src={item?.src} alt="Icon" layout="fill" /></div>)}
//     </>
//   )
// }