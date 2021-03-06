import React from 'react'
import { render } from 'react-dom'
import './Component.css'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
// import { VideoPlayer } from '@livepeer/chroma'
import ReactHLS from 'react-hls'

const STREAM_ROOT_URL = 'http://localhost:8935/stream'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: 'linear-gradient(45deg, #9c7e46 30%, #CBB386 90%)',
  },
  butt: {
    background: 'linear-gradient(45deg, #9c7e46 30%, #CBB386 90%)',
    border: 0,
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 45,
    padding: '0 30px',
  },
  card: {
    maxWidth: 600,
    margin: 'auto',
    transition: '0.3s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
    },
  },
  gtext: {
    color: '#9c7e46',
  },
  media: {
    paddingTop: '56.25%',
  },
}))

function Meet() {
  let classes = useStyles()
  return (
    <div className="column">
      <div id="topleft">
        <Typography variant="h5" className={classes.gtext}>
          🍫 Cadbury Meet
        </Typography>
      </div>
      <h2>About</h2>
      This is a cadbury meet page! under construction
    </div>
  )
}

export default Meet
