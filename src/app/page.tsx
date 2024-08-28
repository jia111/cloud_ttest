import { useEffect } from 'react'
import styles from './page.module.css'
export default async function Home() {
  const res = await fetch(`http://w2a.auth.la/info`)
  const resData: any = await res.json()
  const { data } = resData
  if (!data) {
    return <>还没有数据哟</>
  }
  return (
    <>
      <div>名字：{data?.name}</div>
      <div>ICON：<img src={data?.desktop_icon?.src} /></div>
      <div>图片：</div>
      {data?.screenshot?.map((item: any, i: number) => <img key={i} src={item.src} />)}
    </>
  )
}
