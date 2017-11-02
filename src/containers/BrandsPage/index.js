import React from 'react';
import Brands from '../../components/Brands';
import brands from '../../resources/images/brands/brands';

class BrandsPage extends React.Component {
    handleChangePagination = (routeNumber) => {
        this.props.history.push(routeNumber.toString());
    };

    render() {
        const brand = this.props.location.search.replace(/^\D+/g, '');

        return (
            <div>
                <Brands
                    brands={brands[Number(this.props.match.params.paginationActivePage) - 1]}
                    pagesCount={brands.length}
                    paginationActivePage={Number(this.props.match.params.paginationActivePage)}
                    onPaginationRouteChange={this.handleChangePagination}
                    searchedBrand={brand}
                />
            </div>
        )
    }
}

export default BrandsPage;
