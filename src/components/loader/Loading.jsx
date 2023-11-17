import {Bars} from 'react-loader-spinner'

export default function Loading() {
  return (
    <div className='flex justify-center items-center'>
        <Bars   
            height = "80"
            width = "80"
            radius = "9"
            color = 'green'
            ariaLabel = 'three-dots-loading'     
            wrapperStyle
            wrapperClass
        />    
    </div>
  )
}
