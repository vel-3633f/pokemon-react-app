import { NavLink } from "react-router-dom"
import Header from "../components/Header"

const NotFound = () => {
  return (
    <>
      <Header />
      <h1 className="text-3xl mb-10">ページが見つかりません</h1>
      <NavLink to="/" className="text-blue-600 text-3xl">ホームに戻る</NavLink>
    </>
  )
}

export default NotFound