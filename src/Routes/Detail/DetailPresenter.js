import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DetailPresenter = ({result, error, loading}) => null;

DetailPresenter.protoTypes = {
    result : PropTypes.Object,
    error : PropTypes.string,
    loading : PropTypes.bool.isRequired
}

export default DetailPresenter;