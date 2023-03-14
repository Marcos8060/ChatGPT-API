'use client'
import { signIn } from "next-auth/react"
import Image from "next/image"


const Login = () => {
  return (
    <div className="loginBg flex flex-col items-center justify-center h-screen">
        <Image
        src="https://hoit.uk/wp-content/uploads/2023/01/ChatGPT.png"
        width={400}
        height={400}
        alt="logo"
         />
         <button onClick={()=> signIn("google")} className="text-white font-bold text-2xl">Sign In to Use MarcosGPT</button>
    </div>
  )
}

export default Login