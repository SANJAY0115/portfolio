import React from 'react'

const About = () => {
  return (
        <div
          name="about"
          className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                About
              </p>
            </div>
            <p className='text-xl mt-20'>
            Iam a certified FULL STACK DEVELOPER (MERN) 
            <br /><br />
I Participated in " 🏆 ZOHO APPATHON CONTEST 🏆 " 
<br />
 Developed an E-Commerce Web Applicationan and placed as 🥈 Second winner 🥈
<br />
where i gained hands-on experience building real-life applications
<br />
An Inter-College App building contest - conducted by Zoho corportion - chennai.
<br /><br />
Also did certification in ZOHO CREATOR DEVELOPER PROGRAM
<br /><br />
Currently , iam working on projects related to MERN Full Stack
            </p>
            <br /><br />
            {/* <p className='text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime numquam aliquam illo quisquam ex porro atque voluptatem animi neque incidunt expedita sint veritatis, fugit quo suscipit labore doloribus inventore? Minus iure animi maxime accusamus quasi delectus atque ut. Incidunt debitis, tenetur optio explicabo id necessitatibus ducimus veritatis ea iure doloribus.
            </p> */}
        </div>
    </div>
  )
}

export default About