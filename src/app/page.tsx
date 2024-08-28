import { useEffect } from 'react'
import styles from './page.module.css'
export const runtime = "edge";
export default async function Home() {
  const res = await fetch(`https://w2a.auth.la/info`)
  const resData: any = await res.json()

  if (!resData?.data) {
    return <>还没有数据哟</>
  }
  return (
    <>
      <div>名字：{resData?.data?.name}</div>
      <div>ICON：<img src={resData?.data?.desktop_icon?.src} /></div>
      <div>图片：</div>
      {resData?.data?.screenshot?.map((item: any, i: number) => <img key={i} src={item.src} />)}
    </>
  )
}
