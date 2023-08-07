import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#16161D] text-amber-100'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-amber-100'>
              About
            </p>
    </div>
    <div></div>
    </div>
    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Welcome to my Portfolio. I'm Ciara. Feel free to check out my work.</p>
            </div>
            <div>
              <p>This is my first React Portfolio. After finishing a MERN-stack development course, I'm perfecting my React skills and working on fantastic web designs to improve the user experience. </p>  
            </div>
    </div>
    </div>
    </div>
    
  )
}

export default About