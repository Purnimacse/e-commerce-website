import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { deepPurple } from '@mui/material/colors'
import { StarIcon } from '@heroicons/react/24/outline';

const OrderDetails = () => {
  return (
    <div className=' px:5 lg:px-20'>
        <div>
            <h1 className='font-bold text-xl py-7'>Delivery address</h1>
            <AddressCard/>
            </div>
            <div className='py-20'>
                <OrderTracker activeStep ={3}/>
            </div>
            <div>
                <Grid className='space-y-5' container>
                    {[1,1,1,1].map((item)=> <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center", justifyContent:"space-between"}}>
                        <Grid item xs={6}>
                            <div className='flex items-center space-x-4'>
                            <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/2/q/g/30-jeans-kneecut-black-crishtaliyo-2fashion-original-imagqy6gzmpwqkge.jpeg?q=70" alt="" />
                            <div>
                                <p>Mens slim black jean</p>
                                <p className='space-x-5'><span>color: black</span>
                                <span>size:M</span></p>
                                <p>seller: linaria</p>
                                <p>₹1099</p>
                            </div>
                            </div>
                        </Grid>
                        <Grid item>
                              <Box sx={{color:deepPurple[500]}}>
                                
                                <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2 text-5xl'/>
                                <span>Rate and review products</span>
                              </Box>
                        </Grid>
                    </Grid>)}
                    
                </Grid>
            </div>
      
    </div>
  )
}

export default OrderDetails
