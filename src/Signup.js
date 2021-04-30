import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { useHistory } from 'react-router'
import { auth, db } from './Firebase'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './Context'

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  imgContainer: {
    marginTop: 10,
  },
}))

function Signup() {
  const classes = useStyles()

  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setUserName, setUId } = useGlobalContext()

  const register = async (e) => {
    e.preventDefault()
    //do some fancy firebase registerx

    await auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push('/home')
        }
      })
      .catch((error) => alert(error.message))

    const uId = auth.currentUser.uid

    if (uId != null) {
      await db
        .collection('Users')
        .doc(uId)
        .set({
          uid: uId,
          name: email.split('@')[0],
          password: password,
        })
        .then()
        .catch((e) => console.log(e))

      setUserName(email.split('@')[0])
      setUId(uId)
    }
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <div className={classes.imgContainer}>
          {/* <img src={logo}></img> */}
        </div>

        <Avatar className={classes.avatar}></Avatar>
        <Typography component='h1' variant='h5'>
          Sign Up
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            onChange={(val) => {
              setEmail(val.target.value)
            }}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            onChange={(val) => {
              setPassword(val.target.value)
            }}
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={register}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link to='/login'>{'Already have an account? Sign In'}</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}

export default Signup
