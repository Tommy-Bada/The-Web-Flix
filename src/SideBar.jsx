import tv from './assets/tv.svg'
import tvSeries from './assets/TV Show.svg'
import home from './assets/Home.svg'
import movie from './assets/Movie Projector.svg'
import calendar from './assets/Calendar.svg'
import logout from './assets/Logout.svg'


function SideBar(){
    return (
        <div className='border-solid border-[2px] w-[fit-content] h-[100vh] rounded-r-[50px]'>
           <div className="flex items-cente m-4 ">
                <div className='mr-4'><img src={tv} alt="Webflix Logo" /></div>
                <h1 className='text-[24px]'>Webflix</h1>
            </div>
          <div className="flex items-center p-6">
              <div className='mr-2'><img src={home} alt="Home Icon" /></div>
              <p className='text-[20px] text-[#666666]'>Home</p>
          </div>
          <div className="flex items-center p-6">
              <div className='mr-2'><img src={movie} alt="Video icon" /></div>
              <p className='text-[20px] text-[#666666]'>Movie</p>
          </div>
          <div className="flex items-center p-6">
              <div className='mr-2'><img src={tvSeries} alt="TV icon" /></div>
              <p className='text-[20px] text-[#666666]'>TV Series</p>
          </div>
          <div className="flex items-center p-6">
              <div className='mr-2'><img src={calendar} alt="Calendar icon" /></div>
              <p className='text-[20px] text-[#666666]'>Upcoming</p>
          </div>
          <div className='p-2 m-6 bg-[#F8E7EB] w-[150px] border-2 border-[#BE123C] rounded-2xl pt-8 '>
              <h3 className='text-[15px]'>Play movie quizes and earn free tickets</h3>
              <p className='text-[12px] my-2'>50k people are playing now</p>
              <p className='text-[12px] text-[#BE123C] py-2 px-4 w-[fit-content] mx-auto bg-[#BE123C20] rounded-full'>Start Playing</p>
          </div>
          <div className="flex items-center p-6">
              <div className='mr-2'><img src={logout} alt="logout icon" /></div>
              <p className='text-[20px] text-[#666666]'>Log Out</p>
          </div>
        </div>
      )
}

export default SideBar