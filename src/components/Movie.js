import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const LIKE_MOVIE = gql`
  mutation likeMovie($id: Int!) {
    likeMovie(id: $id) @client
  }
`;

const UNLIKE_MOVIE = gql`
  mutation unlikeMovie($id: Int!) {
    unlikeMovie(id: $id) @client
  }
`;

const Container = styled.div`
  height: 380px;
  width: 100%;
  overflow: visible;
`;

const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 10px;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export default ({ id, bg, isLiked }) => {
  const [likeMovie] = useMutation(LIKE_MOVIE, {
    variables: { id: parseInt(id) },
  });
  const [unlikeMovie] = useMutation(UNLIKE_MOVIE, {
    variables: { id: parseInt(id) },
  });
  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={bg} />
      </Link>
      <button onClick={isLiked ? unlikeMovie : likeMovie}>
        {isLiked ? "Unlike" : "Like"}
      </button>
    </Container>
  );
};
