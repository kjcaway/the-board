import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

interface Props {
  data : [];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '90%',
      position: 'relative',
    },
    listRoot: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
    speedDial: {
      position: 'absolute',
      bottom: theme.spacing(5),
      right: theme.spacing(3),
    },
  }),
);

const BoardList = (props: Props) => {
  const classes = useStyles({});

  const mapToListItem = (rows: []) => {
    return rows.map((row: any) => {
      return (
        <>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={row.file_path} />
            </ListItemAvatar>
            <ListItemText
              primary={row.title}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {row.date_write}
                </Typography>
                  - {row.contents}
                </React.Fragment>
              }
            />

          </ListItem>
          <Divider variant="inset" component="li" />
        </>
      )
    })
  }

  return (
    <div className={classes.root}>
      <List className={classes.listRoot}>
        {mapToListItem(props.data)}
      </List>
    </div>
  )
}

export default BoardList
