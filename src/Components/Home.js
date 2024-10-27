import React from 'react'

export default function Home(props) {
    console.log('propsssssss',props);
  return (
    <div className='text-center'>
        {
            props.isAxios?'':<h1> This is Home component.</h1>
        }
     
    </div>
  )
}
