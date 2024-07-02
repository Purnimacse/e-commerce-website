import { Grid } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderCard = () => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-lg hover:shadow-2xl'> 
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
           <Grid item xs={6}>
                 <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/2/q/g/30-jeans-kneecut-black-crishtaliyo-2fashion-original-imagqy6gzmpwqkge.jpeg?q=70" alt="" />
                    <div className='ml-5 space-y-2'>
                        <p className=''>men slim black jean</p>
                        <p className=''>
                            size:M
                        </p>
                        <p>color:black</p>
                    </div>
                 </div>
           </Grid>

           <Grid item xs={2}>
            <p>₹1099</p>
           </Grid>
           <Grid item xs={4}>
           {true && <div><p>
                <span>Delivered on march 03</span>
            </p>
            <p>your order has been delivered</p>
            </div>}
            {false &&<p><span>Expected delivery on march 03</span></p>}
           </Grid>
      </Grid>
    </div>
  )
}

export default OrderCard
