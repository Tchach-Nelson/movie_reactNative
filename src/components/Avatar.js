import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { Metrics } from '../constants';

const Avatar = ({ source, size, ...rest }) => {
    return <Image source={source} size={size} {...rest} />;
};

Avatar.propTypes = {
    source: PropTypes.number.isRequired,
    size: PropTypes.number,
    onPress: PropTypes.func,
};

Avatar.defaultProps = {
    size: Metrics.images.medium,
};

const Image = styled.Image`
    width: ${props => props.size || Metrics.images.medium}px;
    height: ${props => props.size || Metrics.images.medium}px;
    border-radius: ${(props) => props.round  ? props.size ? `${props.size}px` : `${Metrics.images.medium}px` : `0px`};
`;

export default Avatar;
