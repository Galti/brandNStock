import React from 'react';
import PropTypes from 'prop-types';
import {bubble as MenuMobile} from 'react-burger-menu';
import Dialog, {DialogTitle} from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import {
    Wrapper,
    Content,
    MenuItemMobile,
    LogoLink,
    LeftMenuLink,
    SearchWindowWrapper,
} from './StyledComponents';
import InfoBar from './InfoBar';
import Menu from './Menu';
import logo from '../../resources/images/logo-light.png';
import brandsData from '../../resources/images/brands/brands';
import Card3Column from '../Card3Column';
import {Grid} from 'react-bootstrap';

const styles = {
    bmBurgerButton: {
        display: 'none',
    },
    bmCrossButton: {
        display: 'none',
    },
    bmMenuWrap: {},
    bmMenu: {
        top: '58px',
        background: '#fff',
        width: '100%',
        fontSize: '1.15em',

    },
    bmMorphShape: {
        top: '58px',
        fill: '#fff',
    },
    bmItemList: {
        top: '58px',
        padding: '15px',
    },
    bmOverlay: {
        top: '58px',
        background: 'rgba(0, 0, 0, 0.3)',
    }
};

const menuItems = [
    {
        name: 'Бренды',
        link: '/brands',
    },
    {
        name: 'О Нас',
        link: '/about-us',
    },
    {
        name: 'Контакты',
        link: '/contacts',
    },
];

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
            selected: this.props.firstLoadedRoute,
            isSearchWindowOpen: false,
            searchResult: null,
            searchText: '',
        }
    }

    componentWillMount() {
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1000 && this.state.isMenuOpen) {
                this.handleMenuOpenClose();
            }
        });
    }

    componentWillUpdate() {
        const currentPage = window.location.href.replace(/(.+\w\/)(.+)/, "/$2");

        if (this.state.selected !== currentPage) {
            window.scrollTo(0, 0);
            if (currentPage === '/#/') {
                this.setState({
                    selected: currentPage,
                    isMenuOpen: false
                })
            } else {
                this.setState({
                    selected: currentPage
                })
            }
        }
    }

    handleSearch = (searchText) => {
        const text = searchText.toLowerCase();
        let searchResult = [];
        brandsData.forEach((brandData, indexOfRow) => {
            brandData.forEach((brand, indexOfXColumn) => {
                brand.name.toLowerCase().split(' ').forEach((word) => {
                    if (text === word) {
                        searchResult.push({row: indexOfRow, col: indexOfXColumn});
                    }
                });
            })
        });

        if (searchResult.length > 0) {
            this.setState({
                isSearchWindowOpen: true,
                searchResult: searchResult,
                searchText: searchText,
            })
        } else {
            this.setState({
                isSearchWindowOpen: true,
                searchResult: null,
                searchText: searchText,
            })
        }
    };

    handleCloseSearchWindow = () => {
        this.setState({
            isSearchWindowOpen: false,
            searchResult: null,
            searchText: '',
        })
    };

    handleMenuOpenClose = () => {
        if (!this.state.isMenuOpen) {
            this.setState({isMenuOpen: true});
            this.handleBodyOverflowControl(true);
        } else {
            this.setState({isMenuOpen: false});
            this.handleBodyOverflowControl(false);
        }

    };

    handleBodyOverflowControl = (shouldHide) => {
        if (shouldHide) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    };

    handleMenuItemClick = (menuItem) => {
        this.setState({
            selected: menuItem.link
        })
    };

    searchText = '';


    render() {
        // console.log(this.state.selected);
        styles.bmMenuWrap.marginLeft = this.state.isMenuOpen ? '0' : '-200px';
        styles.bmOverlay.opacity = this.state.isMenuOpen ? '1' : '0';
        return (
            <Wrapper>
                <SearchWindowWrapper
                    onRequestClose={this.handleCloseSearchWindow}
                    open={this.state.isSearchWindowOpen}
                    fullScreen
                >
                    <DialogTitle
                        style={{display: 'flex',}}
                    >
                        Search Results for <i>{this.state.searchText}</i>
                        <IconButton
                            aria-label="Close"
                            style={{position: 'absolute', right: 0, marginTop: '-15px', marginRight: '5px'}}
                            onClick={this.handleCloseSearchWindow}
                        >
                            <CloseIcon/>
                        </IconButton>
                    </DialogTitle>
                    <div style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                    }}>
                        <Grid>
                            {
                                this.state.searchResult ?
                                    this.state.searchResult.map((brand) => {

                                        const brandsRow = brandsData[brand.row];
                                        const theBrand = brandsRow[brand.col];
                                        console.log(theBrand);
                                        return (
                                            <Card3Column
                                                image={theBrand.image}
                                            />
                                        )
                                    })
                                    :
                                    (
                                        <div>No Search result for {this.state.searchText}</div>
                                    )
                            }
                        </Grid>
                    </div>
                </SearchWindowWrapper>
                <MenuMobile
                    width='280px'
                    styles={styles}
                    isOpen={this.state.isMenuOpen}
                    onStateChange={(state) => {
                        this.setState({isMenuOpen: state.isOpen});
                        this.handleBodyOverflowControl(state.isOpen);
                    }}
                >
                    <LogoLink to='/'>
                        <img src={logo} style={{height: '56px'}}/>
                    </LogoLink>
                    {
                        menuItems.map((menuItem, index) =>
                            <MenuItemMobile
                                selected={this.state.selected === `/#${menuItem.link}`}
                                key={index.toString()}
                                onClick={() => {
                                    this.handleMenuOpenClose();
                                    this.handleMenuItemClick(menuItem);
                                }}
                            >
                                <LeftMenuLink to={menuItem.link}
                                              selected={this.state.selected === `/#${menuItem.link}`}>
                                    {menuItem.name}
                                </LeftMenuLink>
                            </MenuItemMobile>
                        )
                    }
                    <FormGroup style={{width: '250px', marginTop: '10px'}}>
                        <InputGroup>
                            <FormControl
                                type="text"
                                placeholder="Searh ..."
                                onChange={(e) => this.searchText = e.target.value}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        this.handleSearch(this.searchText);
                                    }
                                }}
                            />
                            <InputGroup.Addon
                                onClick={() => this.handleSearch(this.searchText)}
                            >
                                <Glyphicon glyph="search" style={{cursor: 'pointer'}}/>
                            </InputGroup.Addon>
                        </InputGroup>
                    </FormGroup>
                </MenuMobile>
                <Content>
                    <InfoBar
                        contacts={this.props.contacts}
                        onSearch={this.handleSearch}
                    />
                    <Menu
                        onMenuOpenClose={this.handleMenuOpenClose}
                        onMenuItemClick={this.handleMenuItemClick}
                        menuItems={menuItems}
                        selected={this.state.selected}
                        isMenuOpen={this.state.isMenuOpen}
                        contacts={this.props.contacts}
                    />
                </Content>
            </Wrapper>
        )
    }
}

Header.propTypes = {
    firstLoadedRoute: PropTypes.string,
    contacts: PropTypes.object,
};

export default Header;
