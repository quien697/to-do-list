import React from 'react';
/* PropTypes */
import propTypes from 'prop-types';
/* React-Bootstrap */
import { Nav } from 'react-bootstrap';
/* Constants */
import { ALL, ACTIVE, COMPLETE } from '../constants';

const Filter = ({ handleFilter }) => {
    console.log("Filter");
    return (
        <Nav variant="pills" defaultActiveKey={ALL} onSelect={(key) => handleFilter(key)}>
            <Nav.Item><Nav.Link eventKey={ALL}>全部</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey={ACTIVE}>進行中</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey={COMPLETE}>已完成</Nav.Link></Nav.Item>
        </Nav>
    );
};

Filter.propTypes = {
    handleFilter: propTypes.func,
}

export default Filter;