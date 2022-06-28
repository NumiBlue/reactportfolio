import React from 'react'

const Resume = () => {
  return (
    <div name='resume' className='w-full md:h-screen text-black  bg-[#fbe1f0]'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-black border-indigo-800'>Resume</p>
            <p className='py-6 text-indigo-800'>
              This is where my resume will go when I have revised it to include my most recent experience.
            </p>
        </div>
    </div>
</div>
)
}

export default Resume