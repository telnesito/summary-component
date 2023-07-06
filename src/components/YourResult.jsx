import { Box, Typography } from "@mui/material"

const YourResult = () => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}

      justifyContent={'space-evenly'}

      sx={{
        backgroundImage: 'linear-gradient( hsl(252, 100%, 67%), hsl(241, 81%, 54%))',
        borderRadius: {
          xl: '25px',
          lg: '25px',
          md: '25px',
          sm: '0px 0px 25px 25px',
          xs: '0px 0px 25px 25px'
        },
        width: {
          xl: '50%',
          lg: '50%',
          md: '50%',
          sm: '100%',
          xs: '100%'
        }

      }}
      minHeight={'350px'}
    >
      <Typography
        fontFamily={"Hanken Grotesk"}
        fontWeight={500}
        color={'hsl(241, 100%, 89%)'}
      >Your Result</Typography>

      <Box
        sx={{
          backgroundImage: 'linear-gradient( hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0))'
        }}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        textAlign={'center'}
        borderRadius={'50%'}

        width={'140px'}
        height={'140px'}
      >
        <Box

        >
          <Typography
            fontFamily={"Hanken Grotesk"}
            fontWeight={700}
            fontSize={'50px'}
          >76</Typography>
          <Typography

            fontFamily={"Hanken Grotesk"}
            fontWeight={800}
            color={'hsla(256, 72%, 46%, 1)'}
            fontSize={'15px'}
          >of 100</Typography>
        </Box>

      </Box>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Typography
          fontFamily={"Hanken Grotesk"}
          fontWeight={500}
          fontSize={'22px'}
        >Great</Typography>

        <Typography
          color={'hsl(241, 100%, 89%)'}

          fontFamily={"Hanken Grotesk"}
          fontWeight={500}
          fontSize={'14px'}
          textAlign={'center'}
          width={'70%'}
        >

          Your scored higher than 65% of the people who have taken these tests.
        </Typography>
      </Box>
    </Box>
  )
}

export default YourResult