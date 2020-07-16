import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import { Link } from "react-router-dom";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      medium_cover_image
      language
      rating
      description_intro
    }
    suggestions(id: $id) {
      id
      medium_cover_image
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin: 0 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
`;

const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  width: 100%;
  height: 100%;
  margin-bottom: 5px;
  background-color: transparent;
  background-size: cover;
  background-position: center center;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 5vh;
  right: 5vw;
  font-size: 40px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    font-size: 48px;
  }
`;

const RightImages = styled.div`
  margin: 0 10px;
  width: 25%;
  height: 80%;
  display: flex;
  flex-direction: column;
`;

const Suggestions = styled.div`
  width: 100%;
  min-height: 20%;
  display: flex;
  justify-content: space-around;
  & > * {
    width: 22%;
  }
`;

const Suggestion = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  width: 100%;
  height: 100%;
`;

export default () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) },
  });
  return (
    <Container>
      <Column>
        <Title>{loading ? "loading" : data.movie.title}</Title>
        <Subtitle>
          {data?.movie?.language} · {data?.movie?.rating}
        </Subtitle>
        <Description>{data?.movie?.description_intro}</Description>
      </Column>
      <RightImages>
        <Poster bg={data?.movie ? data.movie.medium_cover_image : ""}></Poster>
        <Suggestions>
          {data?.suggestions?.map((s) => (
            <Link to={`/${s.id}`} key={s.id}>
              <Suggestion bg={s.medium_cover_image} />
            </Link>
          ))}
        </Suggestions>
      </RightImages>
      <CloseButton onClick={() => (window.location.href = "/#/")}>
        X
      </CloseButton>
    </Container>
  );
};
