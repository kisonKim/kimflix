import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'Components/Section';

const Container = styled.div`
    padding: 0 20px;
`;

const Form = styled.form`
    margin-bottom: 50px; 
    width:100%; 
`;

const Input = styled.input`
    all:unset;
    font-size:28px;
    width: 100%;
`;

const SearchPresenter = ({movieResults, tvResults, searchTerm, error, loading, handleSubmit, updateTerm}) => 
    <Container>
        <Form onSubmit={handleSubmit}>
            <Input placeholder="Search Movies or TV shows.." value={searchTerm} onChange={updateTerm}></Input>
        </Form>
    </Container>

SearchPresenter.protoTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array, 
    searchTerm: PropTypes.string,
    loading: PropTypes.isRequired,
    error : PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
}

export default SearchPresenter;