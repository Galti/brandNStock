const brands = [
    {
        name: '10 MILANO',
        typology: 'Fashion',
        age: '03m-16y',
        price: '37',
        image: '../../resources/images/brands/10 MILANO.svg',
        gender: 'boy'
    },
    {
        name: 'ALVIERO MARTINI acc',
        typology: 'CEREMONIAL',
        age: '18',
        price: '11',
        image: '../../resources/images/brands/alviero martini i\' classe.svg',
        gender: 'boy/girl'
    },
    {
        name: 'ASPEN Polo Club',
        typology: 'SPORTSWEAR',
        age: '4y-16y',
        price: '20',
        image: '../../resources/images/brands/aspen polo club.svg',
        gender: 'boy'
    },
    {
        name: 'Billieblush',
        typology: 'Fashion',
        age: '03m-16y',
        price: '16',
        image: '../../resources/images/brands/billieblush.svg',
        gender: 'girl'
    },
    {
        name: 'BLAUER U.S.A.',
        typology: 'SPORTSWEAR',
        age: '2y-16y',
        price: '22',
        image: '../../resources/images/brands/blauer.svg',
        gender: 'boy/girl'

    },
    {
        name: 'BLUMARINE',
        typology: 'CEREMONIAL+FASHION',
        age: '0m-14y',
        price: '32',
        image: '../../resources/images/brands/BLUMARINE',
        gender: 'girl'
    },
    {
        name: 'MISS BLUMARINE BABY',
        typology: 'CEREMONIAL+FASHION',
        age: '12m-6y',
        price: '29.5',
        image: '../../resources/images/brands/miss-blumarine baby.svg',
        gender: 'girl'
    },
    {
        name: 'MISS BLUMARINE JUNIOR',
        typology: 'CEREMONIAL+FASHION',
        age: '6y-16y',
        price: '32',
        image: '../../resources/images/brands/miss-blumarine baby.svg',
        gender: 'girl'
    },
    {
        name: 'MISS BLUMARINE NEONATO',
        typology: 'CEREMONIAL+FASHION',
        age: '3m-24y',
        price: '25',
        image: '../../resources/images/brands/miss-blumarine baby.svg',
        gender: 'girl'
    },
    {
        name: 'BOSS',
        typology: 'SPORTSWEAR',
        age: '3m-16y',
        price: '25',
        image: '../../resources/images/brands/boss.svg',
        gender: 'boy'
    },
    {
        name: 'Cesare Paciotti',
        typology: 'CEREMONIAL',
        age: '6m-14y',
        price: '30',
        image: '../../resources/images/brands/cesare paciotti.svg',
        gender: 'boy/girl'
    },
    {
        name: 'Danielle Alessandrini',
        typology: 'CEREMONIAL+FASHION',
        age: '12m-16y',
        price: '24',
        image: '../../resources/images/brands/danielle alessandrini.svg',
        gender: 'boy'
    },
    {
        name: 'DENNY ROSE',
        typology: 'CEREMONIAL+FASHION',
        age: '12m-16y',
        price: '13',
        image: '../../resources/images/brands/DENNY ROSE.svg',
        gender: 'boy/girl'
    },
    {
        name: 'DIESEL',
        typology: 'CEREMONIAL+FASHION',
        age: '12m-16y',
        price: '17',
        image: '../../resources/images/brands/diesel.svg',
        gender: 'boy'
    },
    {
        name: 'Dsquared2',
        typology: 'SPORTSWEAR',
        age: '12m-16y',
        price: '50',
        image: '../../resources/images/brands/dsquared.svg',
        gender: 'boy'
    },
    {
        name: 'Ermanno Scervno',
        typology: 'CEREMONIAL',
        age: '03m-16y',
        price: '37',
        image: '../../resources/images/brands/ermanno scervno.svg',
        gender: 'girl'
    },
    {
        name: 'Harmont and Blaine',
        typology: 'FASHION/SPORTSWEAR',
        age: '03m-14y',
        price: '38',
        image: '../../resources/images/brands/harmont-and-blaine.svg',
        gender: 'boy/girl'
    },
    {
        name: 'INVICTA',
        typology: 'SPORTSWEAR',
        age: '2y-16y',
        price: '35',
        image: '../../resources/images/brands/INVICTA.svg',
        gender: 'boy/girl'
    },
    {
        name: 'Karl',
        typology: 'SPORTSWEAR',
        age: '03m-16y',
        price: '26',
        image: '../../resources/images/brands/karl.svg',
        gender: 'boy/girl'
    },
    {
        name: 'Lamborghini',
        typology: 'SPORTSWEAR',
        age: '06m-16y',
        price: '19',
        image: '../../resources/images/brands/lamborghini.svg',
        gender: 'boy'
    },
    {
        name: 'LEVIS',
        typology: 'CEREMONIAL+FASHION',
        age: '12m-16y',
        price: '12',
        image: '../../resources/images/brands/LEVIS.svg',
        gender: 'boy'
    },
    {
        name: 'LULU',
        typology: 'FASHION',
        age: '2y-16y',
        price: '14',
        image: '../../resources/images/brands/LULU.svg',
        gender: 'girl'
    },
    {
        name: 'Maelie',
        typology: 'FASHION/SPORTSWEAR',
        age: '03m-16y',
        price: '16',
        image: '../../resources/images/brands/maelie.svg',
        gender: 'girl'
    },
    {
        name: 'NIKE',
        typology: 'SPORTSWEAR',
        age: '06m-14y',
        price: '14',
        image: '../../resources/images/brands/NIKE.svg',
        gender: 'boy/girl'
    },
    {
        name: 'Philipp Plein',
        typology: 'SPORTSWEAR/FASHION',
        age: '4y-16y',
        price: '50',
        image: '../../resources/images/brands/philipp-plein.svg',
        gender: 'boy/girl'
    },
    {
        name: 'POUR MOI',
        typology: 'CEREMONIAL+FASHION',
        age: '6y-26y',
        price: '11',
        image: '../../resources/images/brands/POUR MOI.svg',
        gender: 'girl'
    },
    {
        name: 'Quis Quis',
        typology: 'SPORTSWEAR',
        age: '03m-16y',
        price: '39',
        image: '../../resources/images/brands/quis quis.svg',
        gender: 'girl'
    },
    {
        name: 'Roberto Cavalli',
        typology: 'SPORTSWEAR/CEREMONIAL',
        age: '03m-16y',
        price: '37',
        image: '../../resources/images/brands/roberto_cavalli.svg',
        gender: 'boy/girl'
    },
    {
        name: 'RUBACUORI',
        typology: 'CEREMONIAL+FASHION',
        age: '12m-16y',
        price: '14',
        image: '../../resources/images/brands/RUBACUORI.svg',
        gender: 'boy/girl'
    },
    {
        name: 'Simonetta',
        typology: 'FASHION',
        age: '06m-16y',
        price: '37',
        image: '../../resources/images/brands/Simonetta.svg',
        gender: 'girl'
    },
    {
        name: 'Stella McCartney',
        typology: 'CEREMONIAL+FASHION',
        age: '12m-24y',
        price: '21',
        image: '../../resources/images/brands/Stella_McCartney.svg',
        gender: 'girl'
    },
    {
        name: 'Two Play',
        typology: 'SPORTSWEAR',
        age: '2y-14y',
        price: '12',
        image: '../../resources/images/brands/two play.svg',
        gender: 'boy'
    },
];

export default brands;
