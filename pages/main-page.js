import Cookies from "universal-cookie"
import { useRouter } from 'next/router'
import Layout from "../components/Layout"
import Link from "next/link"

const cookie = new Cookies()

const MainPage = () => {
  const router = useRouter()
  const logout = () => {
    cookie.remove("access_token")
    router.push("/")
  }

  return (
    <Layout title="Main page">
      <div className="mb-10"> 
        <Link href="/blog-page">
          <a className="bg-indigo-500 mr-8 hover:bg-indigo-600 text-white px-4 py-12 rounded" >
            Visit Blog by SSG + ISR
          </a>
        </Link>
        <Link href="/task-page">
          <a className="bg-indigo-500 mr-8 hover:bg-indigo-600 text-white px-4 py-12 rounded" >
            Visit Task by SSG + CSR
          </a>
        </Link>
      </div>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6 mt-10 cursor-pointer" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        onClick={logout}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
      </svg>
    </Layout>
  )
}

export default MainPage
