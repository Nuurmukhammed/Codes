import React from 'react'

const Quiz = () => {
  return (
    <div className='body w-full h-screen flex items-center justify-center'>
      <div className="container w-full h-full flex flex-col gap-32 max-w-7xl px-[140px] py-[83px]">
        <header className="header w-full flex flex-row justify-between items-center">
          <div className="sub-name-box"></div>
          <div className="dark-part">
          <label className="flex cursor-pointer gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
            <input type="checkbox" value="synthwave" className="toggle theme-controller"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </label>
          </div>
        </header>
        <main className="main w-full flex flex-row justify-between items-center gap-x-32">
          <div className="main_left flex flex-col justify-center items-start gap-5">
            <span className='text-[#626C7F] text-xl font-normal italic'>Question 1 of 1</span>
            <h2 className='text-[#313E51] font-medium text-4xl'>Question</h2>
            <div>process(violet)</div>
          </div>
          <div className="main_right">Options</div>
        </main>
      </div>
    </div>
  )
}

export default Quiz