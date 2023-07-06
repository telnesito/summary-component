import { Box, Typography } from '@mui/material'
import React from 'react'

const CardSummary = ({ icon, name, currentPoints, colorBg, colorTypo }) => {

  return (
    <Box

      height={'55px'}
      width={'90%'}
      borderRadius={'10px'}
      bgcolor={colorBg}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}

    >

      <Box
        display={'flex'}
        gap={'20px'}
        width={
          '70%'
        }

        sx={{
          width: {
            xl: '70%',
            lg: '70%',
            md: '70%',
            sm: '80%',
            xs: '70%'
          }
        }}
      >
        <img src={icon} />
        <Typography
          fontFamily={"Hanken Grotesk"}
          fontWeight={500}
          color={colorTypo}
        >{name}</Typography>
      </Box>

      <Box
        display={'flex'}
        gap={'5px'}

        width={'20%'}
        sx={{
          width: {
            xl: '20%',
            lg: '20%',
            md: '20%',
            sm: '10%',
            xs: '20%'


          }
        }}
        justifyContent={'center'}
      >
        <Typography
          fontFamily={"Hanken Grotesk"}
          fontWeight={700}
          color={'black'}
        >{currentPoints}</Typography>
        <Typography
          fontFamily={"Hanken Grotesk"}
          fontWeight={500}
          color={'hsl(241, 100%, 89%)'}
        >/</Typography>
        <Typography
          fontFamily={"Hanken Grotesk"}
          fontWeight={500}
          color={'hsl(241, 100%, 89%)'}
        >100</Typography>
      </Box>

    </Box>
  )
}

export default CardSummary