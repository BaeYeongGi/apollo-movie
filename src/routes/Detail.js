import React from 'react';
import { useParams } from "react-router-dom";
import { gql, useQuery } from '@apollo/client'
import styled from "styled-components";

const GET_MOVIE = gql`
  query getMovie($id: Int!){
    movie(id: $id){
      title
      medium_cover_image
      language
      rating
      description_intro
    }
  }
`;

const Container = styled.div`
  width:100%;
  height:100vh;
  background:#ccc;
  display:flex;
  justify-content:center;
  align-items:center;
  color:#fff;
`;

const Column = styled.div`
  margin-left:10px;
`;

const Title = styled.h1`
  font-size:64px;
  margin-bottom:10px;
`;

const SubTitle = styled.h4`
  font-size:34px;
  margin-bottom:10px;
`;

const Description = styled.p`
  font-size:26px;
`;

const Poster = styled.div`
  width: 25%;
`;

const Detail = () => {
  const { id } = useParams();
  const { loading, data, error } = useQuery(GET_MOVIE, {
    variables: { id: +id }
  });
  console.log('아이디~',id);
  console.log('로딩', loading);
  console.log('에러', error);
  return (
    <Container>
      <Column>
        <Title>{loading ? "Loading..." : data.movie.title}</Title>
            <SubTitle>{data?.movie?.language} {data?.movie?.rating}</SubTitle>            
            <Description>{data?.movie?.description_intro}</Description>
      </Column>
      <Poster><img src={data?.movie?.medium_cover_image} alt=""/></Poster>
      </Container>
  );
};

export default Detail;