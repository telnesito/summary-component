import { Box } from '@mui/material'
import YourResult from './components/YourResult'
import Summary from './components/Summary'
function App() {

  return (
    <Box
      boxSizing={'border-box'}
      width={'100%'}
      height={'100vh'}
      minHeight={'760px'}
      bgcolor={'white'}
      alignItems={'center'}
      display={'flex'}
      flexDirection={'column'}

      justifyContent={'center'}

    >

      <Box
        minWidth={'700px'}
        justifyContent={'center'}
        borderRadius={'25px'}
        boxShadow={'5px 5px 20px #00000020'}
        sx={{
          display: {
            "xl": 'flex',
            "lg": 'flex',
            "md": "flex",
            "sm": 'block',
            "xs": 'block'
          },
          height: {
            "xl": '55%',
            "lg": '55%',
            "md": '55%',
            "sm": '100%',
            "xs": '100%'
          },
          width: {

            "xl": '60%',
            "lg": '60%',
            "md": '60%',
            "sm": '100%',
            "xs": '100%'
          },
          minWidth: {
            "xl": '700px',
            "lg": '700px',
            "md": '700px',
            "sm": '0',
            "xs": '0'
          }
        }}
      >
        <YourResult />
        <Summary />
      </Box>
    </Box>

  )
}

export default App
