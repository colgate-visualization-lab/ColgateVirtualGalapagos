import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Card, CardActions, CardContent, Button, Typography} from '@material-ui/core'

const Note = (props) => {
    const classes = useStyles()
    const content = props.content
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                    {props.title}
                </Typography>
                {content.length > 50 ? content.substring(0,50) + '...' : content}
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">Show</Button>
                <Button size="small" color="primary">Edit</Button>
                <Button size="small" color="primary" onClick={props.handleDelete}>Delete</Button>
            </CardActions>
        </Card>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "300px",
        maxHeight: "300px",
        marginTop: theme.spacing(2),
    },
}))

export default Note