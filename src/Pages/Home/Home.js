import React from "react"
import Superhero from '../../Components/Superhero/Superhero'
import HareBody from './assets/hare.svg'
import { Grid, Box, Button } from '@material-ui/core'
import './Home.css'
// import { borderColor } from "@material-ui/system"
import Spotify from './assets/spotify.svg'
import AppleMusic from './assets/apple.svg'


const styles = {
  gridContainer: {
      position: 'absolute',
      bottom: '44vw'
  },
  debutButtons: {
    marginTop: '2vw',
    color: 'white',
    borderRadius: '0',
    borderWidth: '2px',
    borderColor: 'white',
    padding: '22px 12px'
  },
  debutGridContainer: {
    marginLeft: '0.5vw'
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
      <Grid container style={styles.debutGridContainer} direction='column' alignItems="flex-start" spacing={4}>
        <Button variant="outlined" color="primary"  style={styles.debutButtons}>
          <DebutButtonLabel image={Spotify}/>
        </Button>
        <Button variant="outlined" color="primary" style={styles.debutButtons}>
          <DebutButtonLabel image={AppleMusic}/>
        </Button>
      </Grid>
      
    </div>
  )
}

const DebutTitle = () => {
  return (
    <div className='debut-title'>
      <div className='title'>
        DEBUT SINGLE
      </div>
      <div className='sub-title'>
        BETTER OFF
      </div>
    </div>
  )
}

const DebutButtonLabel = ({image}) => {
  return (
    <div className='button-label'>
      <div className='button-text'>
        Play on
      </div>
      <img className='button-debut-image' src={image} alt="React Logo" />
    </div>
  )
}


export default Homepage