import React from 'react'
import { Card,CardHeader, CardContent, IconButton, Typography, makeStyles, Avatar } from '@material-ui/core'
import {DeleteOutlined} from '@material-ui/icons'

const useStyles = makeStyles({
    test: {
      border: (note) =>{
        if(note.category == 'work'){
          return '1px solid red'
        }
      }
    },
    avatar:{
        backgroundColor: (note)=>{
            if(note.category === 'work'){
                return 'red'
            }
            if(note.category === 'money'){
                return 'blue'
            }
            if(note.category === 'reminders'){
                return 'black'
            }
                return 'green'
        }
    }
  })
  
function NoteCard(props) {
    const {note, handleDelete} = props
    const classes = useStyles(note)
    const Delete = (id) => {
        console.log(id)
        handleDelete(id)
    }
    return (
        <div>
            <Card elevation={1} className={classes.test}>
                <CardHeader
                avatar = {<Avatar className={classes.avatar}>
                    {note.category[0].toUpperCase()}
                </Avatar>}
                action={
                    <IconButton onClick={()=> Delete(note.id)}>
                        <DeleteOutlined/>
                    </IconButton>
                }
                title={note.title}
                subheader = {note.category}
                />
                <CardContent>
                    <Typography variant="body2">{note.details}</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default NoteCard

