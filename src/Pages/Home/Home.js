import React from "react"
import Superhero from '../../Components/Superhero/Superhero'
import HareBody from './assets/hare.svg'
import { Grid, Box, Button } from '@material-ui/core'
import './Home.css'

const styles = {
  gridContainer: {
      position: 'absolute',
      bottom: '44vw'
  },
  debutButtons: {
    marginTop: '20px'
  }
};

const Homepage = () => {
  return (
    <div className='home-container'>
      <Superhero />
      <div className='home-body'>
      <img className='home-image' src={HareBody} alt="React Logo" />

      <Grid container style={styles.gridContainer} spacing={0} direction='row'>
          <Box width={1/2}>
              <DebutModule />
          </Box>
        </Grid>
      </div>
    </div>  
  )
}

const DebutModule = () => {
  return (
    <div className='debut'>
      <DebutTitle/>
      <Grid container direction='column' alignItems="flex-start" spacing={4}>
        <Button variant="outlined" color="primary"  style={styles.debutButtons}>
          Primary
        </Button>
        <Button variant="outlined" color="primary" style={styles.debutButtons}>
          Primary
        </Button>
      </Grid>
      
    </div>
  )
}

const DebutTitle = () => {
  return (
    <div className='debut-title'>
      <div className='title'>
        Debut Single
      </div>
      <div className='sub-title'>
        Better Off
      </div>
    </div>
  )
}

export default Homepage