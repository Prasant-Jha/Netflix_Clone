import React from 'react'
import Accordion from './Accordion';
import VideoComponent from './VideoComponent';
import Logo from '../assets/logo.png';

function home() {
  const accordionItems = [
    {
      title: 'What is Netflix?',
      content: ["Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"],
    },
    {
      title: 'How much does Netflix cost?',
      content: ["Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."],
    },
    {
      title: 'Where can I watch?',
      content: ["Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."],
    },
    {
      title: 'How do I cancel?',
      content: ["Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."],
    },
    {
      title: 'What can I watch on Netflix?',
      content: ["Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."],
    },
    {
      title: 'Is Netflix good for kids?',
      content: ["The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."],
    },
  ];
  return (
    <div className='h-[625vh] w-[100%] bg-black flex flex-col'>
      <div className='h-[20vh] flex items-center justify-between z-10'>
        {/* <h2 className='text-red-700 ml-[30vh] text-[50px] font-bold'>Netflix</h2> */}
        <img src={Logo} alt="" className='h-[150px] w-[150px] ml-[30vh]' />
        <div className='flex mr-[30vh] gap-[5vh]'>
          <select className='rounded-[5px] w-[18vh] h-[32px] font-bold bg-black border border-white text-white'>
            <option className='bg-white text-black'>English</option>
            <option className='bg-white text-black'>Hindi</option>
          </select>
          <button className='h-[32px] w-[12vh] bg-red-500 rounded-[5px] text-white font-bold'>Sign In</button>
        </div>
      </div>
      <div className='h-[80vh] flex flex-col items-center justify-center z-10'>
        <h2 className='text-white text-[50px] font-bold text-center mt-[15vh]'>Unlimited movies, TV shows and more</h2>
        <h3 className='text-white text-[30px]  text-center mt-[3vh]'>Watch anywhere. Cancel anytime</h3>
        <p className='text-white text-[20px]  text-center mt-[3vh]'>Ready to watch? Enter your email or mobile number to create or restart your membership.</p>
        <div className='flex gap-[15px] mt-[5vh]'>
          <input type='text' placeholder='Email or mobile number' className='h-[60px] w-[53vh] bg-transparent border border-white rounded-[5px] p-[15px]' />
          <button className='h-[60px] w-[30vh] bg-red-700 text-white rounded-[5px] text-[30px]'>Get Started</button>
        </div>
      </div>
      <div className='h-[100vh] w-[100%] absolute opacity-30'>
        <img src='https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/netflixteaser.png' className='h-[100vh] w-[100%]' />
      </div>
      <div className='w-[100%] h-[80vh] flex border-t-[10px] border-custom-gray'>
        <div className='flex flex-col justify-center text-white h-[80vh] w-[50%]'>
          <h1 className='text-[50px] font-bold ml-[20vh]'>Enjoy on your TV</h1>
          <p className='text-[30px] ml-[20vh] mt-[3vh]'>Watch on smart TVs, PlayStation, Xbox, Chromecast, <br /> Apple TV, Blu-ray players and more.</p>
        </div>
        <div className='w-[50%] h-[80vh] flex items-center justify-center'>
          <VideoComponent />
        </div>
      </div>
      <div className='w-[100%] h-[80vh] flex border-t-[10px] border-custom-gray'>
        <div className='w-[50%] h-[80vh] flex items-center justify-center'>
          <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg' className='h-[50vh] w-[70vh]' />
        </div>
        <div className='flex flex-col justify-center text-white h-[80vh] w-[50%]'>
          <h1 className='text-[50px] font-bold'>Download your shows <br /> to watch offline</h1>
          <p className='text-[30px]'>Save your favourites easily and always have something <br /> to watch.</p>
        </div>
      </div>
      <div className='w-[100%] h-[80vh] flex border-t-[10px] border-custom-gray'>
        <div className='flex flex-col justify-center text-white h-[80vh] w-[50%]'>
          <h1 className='text-[50px] font-bold ml-[20vh]'>Watch everywhere</h1>
          <p className='text-[30px] ml-[20vh] mt-[3vh]'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
        <div className='w-[50%] h-[80vh] flex items-center'>
         <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png' className='h-[60vh] w-[80vh]' />
        </div>
      </div>
      <div className='w-[100%] h-[80vh] flex border-t-[10px] border-custom-gray'>
        <div className='w-[50%] h-[80vh] flex items-center justify-center'>
          <img src='https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d' className='h-[50vh] w-[80vh]' />
        </div>
        <div className='flex flex-col justify-center text-white h-[80vh] w-[50%]'>
          <h1 className='text-[50px] font-bold'>Create profiles for kids</h1>
          <p className='text-[30px] mt-[3vh]'>Send children on adventures with their favourite <br /> characters in a space made just for them—free with <br /> your membership.</p>
        </div>
      </div>
      <div className="h-[150vh] w-[100%] flex flex-col items-center justify-center text-white cursor-pointer border-t-[10px] border-custom-gray">
        <h1 className='text-[50px] font-bold text-center'>Frequently Asked Questions</h1><br />
        <Accordion items={accordionItems} /><br />
        <p className='text-[25px]'>Ready to watch? Enter your email or mobile number to create or restart your membership.</p>
        <div className='flex gap-[15px] mt-[5vh]'>
          <input type='text' placeholder='Email or mobile number' className='h-[60px] w-[53vh] bg-light-gray border border-white rounded-[5px] p-[15px]' />
          <button className='h-[60px] w-[30vh] bg-red-700 text-white rounded-[5px] text-[30px]'>Get Started</button>
        </div>
      </div>
      <div className='flex items-center justify-center border-t-[10px] border-custom-gray'>
      <div className='grid grid-cols-4 text-gray-400 w-[70%] h-[50%] '>
        <div className='flex flex-col gap-4 justify-center'>
          <a href="">Questions? Call 000-800-919-1694</a>
          <a href="">FAQ</a>
          <a href="">Investor Relations</a>
          <a href="">Privacy</a>
          <a href="">Speed Test</a>
          <select className='rounded-[5px] w-[18vh] h-[32px] font-bold bg-black border border-white text-white'>
            <option className='bg-white text-black'>English</option>
            <option className='bg-white text-black'>Hindi</option>
          </select>
          <a href="">Netflix india</a>
        </div>
        <div className='flex flex-col gap-4 justify-center'>
          <a href="">Help Centre</a>
          <a href="">Jobs</a>
          <a href="">Cookie Preferences</a>
          <a href="">Legal Notices</a>
        </div>
        <div className='flex flex-col gap-4 justify-center'>
          <a href="">Account</a>
          <a href="">Ways to Watch</a>
          <a href="">Corporate Information</a>
          <a href="">Only on Netflix</a>
        </div>
        <div className='flex flex-col gap-4 justify-center'>
          <a href="">Media Centre</a>
          <a href="">Terms of Use</a>
          <a href="">Contact Us</a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default home
