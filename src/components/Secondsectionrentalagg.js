import React from 'react'
import '../styles/Secondsectionrentalagg.css'
import image1 from '../assets/1logorentalagg.png'
import image2 from '../assets/2logorentalagg.png'
import image3 from '../assets/3logorentalagg.png'
function Secondsectionrentalagg() {
    return (
        <div className='secondsectioncontainer'>
            <div className='secondsectionhead'>
                How it works
            </div>
            <div className='secondsectiondatacont'>
                <div className='secondsectioncontent'>
                    <img src={image1} alt='' className='imagessecondsection1'></img>
                    <p className='datarentalagg1'>Fill the details online and customize your agreement as per your requirements.</p>
                </div>
                <div className='secondsectioncontent'>
                <img src={image2} alt='' className='imagessecondsection2'></img>
                <p className='datarentalagg'>Feel free to electronically sign the agreement at a time that suits you.</p>
                </div>
                <div className='secondsectioncontent'>
                <img src={image3} alt='' className='imagessecondsection3'></img>
                <p className='datarentalagg'>Get the documents delivered at your doorstep or get the rental agreement on your mail with e stamp.</p>
                </div>
            </div>
        </div>
    )
}

export default Secondsectionrentalagg