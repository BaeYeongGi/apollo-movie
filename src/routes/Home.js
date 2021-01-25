import React from 'react';
import { gql, useQuery } from '@apollo/client';
import styled from "styled-components"
import Movie from "../components/Movie";

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`
const Container = styled.div`

`

const Header = styled.header`

`

const Title = styled.h1`
  text-align:center;
  font-size:30px;
  font-weight:600;
  margin:30px 0 10px 0;
  color:#333;
`

const SubTitle = styled.h2`
  text-align:center;
  font-size:20px;
  margin:0 0 10px 0;
  color:#333;
`

const Loading = styled.div`
  width:100%; height:100%; background:#555;
  position:fixed; top:0; left:0;
  display:flex; justify-content:center; align-items:center;
  > p {color:#fff; font-style:italic; font-size:20px; }
`

const Movies = styled.div`
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  width:90%;
  margin:0 auto;
  position:relative;
  padding:0 0 30px 0;
  > div {width:200px; height:300px; margin:6px;}
`

const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  console.log('로딩~', loading)
  console.log('에러~', error)
  console.log('데이터~', data)
  

  return (
    <Container>
      <Header>
        <Title>Apollo 2021</Title>
        <SubTitle>I Love GraphQL</SubTitle>
      </Header>
      {loading && <Loading><p>Loading...</p></Loading>}
        <Movies>
          {data?.movies?.map(m => (
            <Movie
              key={m.id}
              id={m.id}
              bg={m.medium_cover_image}
            />
          ))}
        </Movies>
      )}
    </Container>
  );
};

export default Home;