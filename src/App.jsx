import React from 'react'
import { useState } from 'react'
import Card from './components/Card'

const App = () => {

  const [userName, setUserName] = useState("")
  const [userPic, setUserPic] = useState("")
  const [userRole, setUserRole] = useState("")
  const [userDesc, setUserDesc] = useState("")

  const localData = JSON.parse(localStorage.getItem('all-users')) || [];

  const [allUsers, setAllUsers] = useState(localData);

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("submit hanler");

    const oldUsers = [...allUsers];
    oldUsers.push({ userName, userPic, userRole, userDesc })

    setAllUsers(oldUsers);
    localStorage.setItem("all-users", JSON.stringify(oldUsers));

    setUserName('')
    setUserPic('')
    setUserRole('')
    setUserDesc('')
  }

  const deleteHandler = (idx) => {

    let copyUsers = [...allUsers];
    const conf = confirm("Are you really want to delete this elem ?");

    if (conf) {
      copyUsers.splice(idx, 1);
    } else {
      alert("Element not deleted")
    }

    setAllUsers(copyUsers);
    localStorage.setItem("all-users", JSON.stringify(copyUsers));
  }


  return (
    <div className='h-screen w-full bg-black text-white' >
      <h1 className='text-center text-3xl pt-5 pb-3.5' >Add User</h1>

      <form className='flex flex-wrap justify-center w-full'
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input className='border-2 px-5 py-2 rounded m-2 w-[48%]' type="text" placeholder='Enter your name' value={userName} onChange={(e) => {
          setUserName(e.target.value)
        }} />
        <input className='border-2 px-5 py-2 rounded m-2 w-[48%]' type="text" placeholder='Enter image URl' value={userPic} onChange={(e) => {
          setUserPic(e.target.value)
        }} />
        <input className='border-2 px-5 py-2 rounded m-2 w-[48%]' type="text" placeholder='Enter role' value={userRole} onChange={(e) => {
          setUserRole(e.target.value)
        }} />
        <input className='border-2 px-5 py-2 rounded m-2 w-[48%]' type="text" placeholder='Enter description' value={userDesc} onChange={(e) => {
          setUserDesc(e.target.value)
        }} />

        <button className='mt-6 mx-30 px-5 py-2 w-100 rounded-2xl bg-emerald-700 cursor-pointer active:scale-95' type='submit'
        >Create user
        </button>
      </form>

      <div className="w-full flex flex-wrap justify-center gap-7 pt-10 px-4">
        {allUsers.map((elem, idx) => (
          <Card
            key={idx}
            user={elem}
            deleteHandler={deleteHandler}
            idx={idx}
          />
        ))}
      </div>

    </div>
  )
}

export default App
