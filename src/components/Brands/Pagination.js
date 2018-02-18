import React from 'react';
import PropTypes from 'prop-types';
import { Pagination as BootstrapPagination } from 'react-bootstrap';

const Pagination = (props) => {
    const prev = props.activePage !== 1 ?
        <BootstrapPagination.Prev onClick={() => props.onSelect(props.activePage - 1)} /> : <div></div>;
    const next = props.activePage !== props.itemsCount ?
        <BootstrapPagination.Next onClick={() => props.onSelect(props.activePage + 1)} /> : <div></div>;
    const items = [];
    let i = props.activePage >= 3 ? props.activePage - 2 : 1;
    let endOfPagination = props.activePage + 2 <= props.itemsCount ? props.activePage + 2 : props.itemsCount;
    for (i; i <= endOfPagination; i++) {
        const route = i;
        items.push(
            <BootstrapPagination.Item
                active={i === props.activePage}
                onClick={() => props.onSelect(route)}
            >
                {i}
            </BootstrapPagination.Item>
        )
    }
    console.log(items);

    return (
        <BootstrapPagination
            bsSize="medium"
        >
            {prev}
            {items}
            {next}
        </BootstrapPagination>
    )
}

Pagination.proppTypes = {
    onSelect: PropTypes.func.isRequired,
    itemsCount: PropTypes.number.isRequired,
    activePage: PropTypes.number.isRequired,
};

export default Pagination;
