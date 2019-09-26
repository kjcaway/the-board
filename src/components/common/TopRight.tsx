import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';

interface Props {
  title: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
    },
    leftIcon: {
      marginRight: theme.spacing(1),
    },
  }),
);

const TopRight = (props: Props) => {
  const classes = useStyles({});

  return (
    <>
      <Typography variant="h6" className={classes.title}>
        {props.title}
      </Typography>
      <Button color="inherit" href="/login">
        <VpnKeyOutlinedIcon className={classes.leftIcon} />
        Login
      </Button>
    </>
  )
}

export default TopRight
