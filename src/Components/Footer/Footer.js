import React from "react"
import { Typography, Grid, Button, Box } from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';

import Amazon from './assets/amazon-button.svg'
import AppleMusic from './assets/apple-music-button.svg'
import iTunes from './assets/itunes-button.svg'
import Spotify from './assets/spotify-button.svg'
import YouTube from './assets/youtube-button.svg'

import SocialInstagram from './assets/social-instagram.svg'
import SocialApple from './assets/social-apple.svg'
import SocialFacebook from './assets/social-facebook.svg'
import SocialTwitter from './assets/social-twitter.svg'
import SocialSoundcloud from './assets/social-soundcloud.svg'
import SocialSpotify from './assets/social-spotify.svg'
import SocialAmazon from './assets/social-amazon.svg'


const listenHereArray = [Spotify, YouTube, AppleMusic, Amazon, iTunes]
const socialArray = [SocialApple, SocialInstagram, SocialFacebook, SocialTwitter, SocialSoundcloud, SocialSpotify, SocialAmazon]


// import { Link } from "react-router-dom"
// import './Navigation.css'

const styles = {
    footer: {
        color: 'white'
    }
}


const useStyles = makeStyles((theme) => ({
    input: {
      border: '2px solid white',
      padding: '10px',
      marginLeft: theme.spacing(1),
      flex: 1,
      color: 'white',
      borderRadius: 1,
      borderColor: 'white',
      width: '471px'
    },
    button: {
        border: '2px solid white',
        color: 'white',
        backgroundColor: '#A2A3E6',
        borderRadius: '0px',
        // marginTop: '5.1vw'
    }
  }));

  
const Footer = () => {
    const classes = useStyles();

  return (
    <footer className='footer' style={styles.footer}>
        <Typography variant="h6" align="center" gutterBottom>
        NEWSLETTER
        </Typography>
        <Form {...classes}/>
        <Box m={5} /> 
        <Button className={classes.button}>
            SUBMIT
        </Button>
        <Box m={4} /> 
        <IconModule itemArray={listenHereArray} classname={'listen-here'} />
        <Box m={8} /> 
        <IconModule itemArray={socialArray} classname={'social-share'} />
        <Box m={10} /> 

        {/* <Copyright /> */}
    </footer>
  )
}

const IconModule = ({itemArray, classname}) => {
    console.log(itemArray)
    return (
        <div className={classname}>
            <Grid
            style={styles.gridContainer}
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
                {itemArray.map((itemSource)=> {
                    console.log(itemSource)
                    return (
                        <Button>
                            <img className='listen-more-button' src={itemSource} alt="React Logo" />
                        </Button>
                    )
                    
                })}
            </Grid>
        </div>
    )
}

const Form = ({input}) => {
    return (
        <form className={'footer-form'} noValidate autoComplete="off" style={styles.footer}>
            <InputBase
            className={input}
            placeholder="E-MAIL ADDRESS"
            inputProps={{ 'aria-label': 'Email address' }}
             />
        </form>

    )
}

export default Footer