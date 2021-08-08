import React, { useState } from "react";
import {
  Typography,
  Button,
  Container,
  makeStyles,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import {fetchNote, insertPost, baseURL} from '../api/index'
import { PostAdd } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles({
  btn: {
    background: "violet",
    "&:hover": {
      background: "blue",
    },
  },
  title: {
    marginBottom: 10,
  },
  field: {
    marginBottom: 20,
    marginTop: 20,
    display: "block",
  },
});

function Create(props) {
  const history = useHistory()
  const classes = useStyle();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);
    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }
    if (title && details) {
     fetch(baseURL, {
       method: 'POST',
       headers: {"Content-type": "application/json"},
       body: JSON.stringify({title, details, category})
     }).then(()=> history.push('/note'))
     console.log(title, details, category)
    }
  };

  return (
    <Container>
      <Typography
        className={classes.title}
        variant="h4"
        color="primary"
        gutterBottom
      >
        Hello Everyone
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Note title"
          variant="outlined"
          color="secondary"
          required
          fullWidth
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Note title"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          required
          fullWidth
          error={detailsError}
        />
        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
            <RadioGroup
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <FormControlLabel
                value="money"
                control={<Radio />}
                label="Money"
              />
              <FormControlLabel
                value="todos"
                control={<Radio />}
                label="Todo"
              />
              <FormControlLabel
                value="reminders"
                control={<Radio />}
                label="Reminder"
              />
              <FormControlLabel value="work" control={<Radio />} label="Work" />
            </RadioGroup>
        </FormControl>

        <Button
          className={classes.btn}
          variant="contained"
          color="primary"
          size="small"
          onClick={handleSubmit}
          endIcon={<ArrowForwardIosIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Create;
