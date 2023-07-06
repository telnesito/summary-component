import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import CardSummary from './CardSummary'
import data from '/results-summary-component-main/results-summary-component-main/data.json'

const Summary = () => {
  return (
    <Box



      sx={{
        width: {
          xl: '50%',
          lg: '50%',
          md: '50%',
          sm: '100%',
          xs: '100%'
        }
      }}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}

      gap={'18px'}
      paddingTop={'18px'}

    >

      <Typography
        color={'hsl(224, 30%, 27%)'}
        fontFamily={"Hanken Grotesk"}
        fontWeight={700}
        width={'90%'}
        textAlign={'left'}
        fontSize={'18px'}
      >Summary</Typography>


      <Box
        display={'flex'}
        flexDirection={'column'}
        width={'100%'}
        alignItems={'center'}
        gap={'10px'}
      >
        {data.map(({ category, colorTypo, bgColor, score, icon }, index) => <CardSummary key={index} name={category} colorTypo={colorTypo} colorBg={bgColor} icon={icon} currentPoints={score} />)}
      </Box>

      <Button variant='contained'
        size='large'
        sx={{
          width: '90%',
          borderRadius: '50px',
          bgcolor: 'hsl(224, 30%, 27%)',
          padding: '15px'
        }}
      >{'Continue'}</Button>


    </Box>
  )
}

export default Summary