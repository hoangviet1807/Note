import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchNote } from "../api/index";
import { Grid, Paper, Container, makeStyles } from "@material-ui/core";
import NoteCard from "../components/NoteCard";
import { baseURL, removeBook } from "../api/index";

function NoteData(props) {
  const queryClient = useQueryClient()
  const { isLoading, error, data } = useQuery("note", () => fetchNote());
  const {mutateAsync, Loading} = useMutation(removeBook)
  if (isLoading) return "Loading...";
  if (error) return "Fetch Error...";   
  console.log(baseURL)

  const deleteBook = async(id) => {
  await mutateAsync(id)
  queryClient.invalidateQueries('note')
  }
  return (
    <Container>
       {Loading ?   <div>...Loading</div> :
      <Grid container spacing={3}>
        {data.map(note => (
          <Grid item xs={12} md={6} lg={4} key={note.id}>
           <NoteCard note={note} handleDelete={deleteBook} />
      </Grid>
        ))}
      </Grid>}
      </Container>
  );
}

export default NoteData;
