import { useEffect } from 'react'
import styles from './page.module.css'
export const runtime = "edge";
export default async function Home({ data }) {

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
export async function getStaticProps(context) {
  const res = await fetch(`http://w2a.auth.la/info`)
  const data = await res.json()

  if (!data.data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data: data.data }, // will be passed to the page component as props
  }
}