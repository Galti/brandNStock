import React from 'react';
import Brands from '../../components/Brands';
import brands from '../../resources/images/brands/brands';

const demoBrandsInfo = [
    {
        name: 'Alice Pi',
        typology: 'Fashion Dress',
        age: '3m-14y',
        price: '20.00',
        image: '../../resources/images/brands/stex dur nkari anuny u formaty',
        gender: 'девочка'
    },
    {
        name: 'alviero martini i\' classe',
        typology: 'CEREMONIAL',
        age: 18,
        price: '100',
        image: 'http://www.arnaudbeelen.be/wp-content/uploads/2015/05/schiller2.jpg',
        gender: 'мальчик/девочка'
    },
    {
        name: 'andranik34',
        typology: 'adsasdas',
        age: 18,
        price: '100',
        image: 'http://www.arnaudbeelen.be/wp-content/uploads/2014/12/cumulus-lookbook.jpg'
    },
    {
        name: 'andranik234',
        typology: 'adsasdas',
        age: 18,
        price: '100$',
        image: 'http://www.arnaudbeelen.be/wp-content/uploads/2015/01/logo3.jpg'
    },
    {
        name: 'andranikhrtg',
        typology: 'adsasdas',
        age: 18,
        price: '100$',
        image: 'http://www.arnaudbeelen.be/wp-content/uploads/2015/01/martialArt.jpg'
    },
    {
        name: 'andranikrtghb',
        typology: 'adsasdas',
        age: 18,
        price: '100$',
        image: 'http://www.arnaudbeelen.be/wp-content/uploads/2015/01/Cumulus-edito-22.jpg'
    },
    {
        name: 'andranikkrotgij',
        typology: 'adsasdas',
        age: 18,
        price: '100$',
        image: 'http://www.arnaudbeelen.be/wp-content/uploads/2015/01/Nathalie-Kiss.jpg'
    },
    {
        name: 'andranikopkroglkr',
        typology: 'adsasdas',
        age: 18,
        price: '100$',
        image: 'http://www.arnaudbeelen.be/wp-content/uploads/2014/12/cumulus2.jpg'
    },
    {
        name: 'andranikkgprktpgvf',
        typology: 'adsasdas',
        age: 18,
        price: '100$',
        image: 'http://www.arnaudbeelen.be/wp-content/uploads/2014/12/paola-madrid4.jpg'
    },
    {
        name: 'andranik123123',
        typology: 'adsasdas',
        age: 18,
        price: '100',
        image: 'http://www.arnaudbeelen.be/wp-content/uploads/2014/12/paola-madrid4.jpg'
    },
    {
        name: 'andranik321321',
        typology: 'adsasdas',
        age: 18,
        price: '100',
        image: 'http://www.arnaudbeelen.be/wp-content/uploads/2014/12/paola-madrid4.jpg'
    },
    {
        name: 'andranik34567890',
        typology: 'adsasdas',
        age: 18,
        price: '100',
        image: 'http://www.arnaudbeelen.be/wp-content/uploads/2014/12/paola-madrid4.jpg'
    },
];

class BrandsPage extends React.Component {
    render() {
        return(
            <div>
                <Brands
                    brands={brands[0]}
                />
            </div>
        )
    }
}

export default BrandsPage;
