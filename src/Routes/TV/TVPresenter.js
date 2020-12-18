import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'Components/Section';
import Loader from 'Components/Loader';

const Container = styled.div`
    padding: 0 20px;
`;

const TVPresenter = ({topRated, popular, airingToday, error, loading}) => loading? <Loader />:
(
        <Container>
            {topRated && topRated.length>0 && <Section title="Top Rated Shows">
                {topRated.map(show=><span key={show.id}>{show.name}</span>)}</Section>}

            {popular && popular.length>0 && <Section title="Popular shows">
                {popular.map(show=><span key={show.id}>{show.name}</span>)}</Section>}

            {airingToday && airingToday.length>0 && <Section title="Airing Today">
                {airingToday.map(show=><span key={show.id}>{show.name}</span>)}</Section>}
        </Container>
)
TVPresenter.protoTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array, 
    airingToday: PropTypes.array,
    loading: PropTypes.isRequired,
    error : PropTypes.string
}

export default TVPresenter;