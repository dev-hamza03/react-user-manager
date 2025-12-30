import React from 'react'

const Card = (props) => {

  console.log(props)


  return (
    <div  className='w-[320px] h-100 bg-white p-5 px-10 flex flex-col items-center rounded-2xl text-center  gap-3.5'  >
      <img className='h-30 w-30 rounded-full object-cover object-top' src={props.user.userPic} alt="" />

      <h1 className='text-3xl font-semibold text-black' >{props.user.userName}</h1>
      <h5 className='text-xl text-[#6d6fba] font-semibold' >{props.user.userRole}</h5>
      <p className='text-black leading-tight' >{props.user.userDesc}</p>

      <button className='text-ri bg-red-500 px-5 py-2 rounded-xl cursor-pointer active:scale-95 mt-2'
        onClick={() => {
           props.deleteHandler(props.idx);
        }}
      >Remove</button>
    </div>
  )
}

export default Card
