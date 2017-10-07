import React from 'react';
import PropTypes from 'prop-types';
import {bubble as MenuMobile} from 'react-burger-menu';
import {
    Wrapper,
    Content,
    MenuItemMobile,
    LogoLink,
    LeftMenuLink,
} from './StyledComponents';
import InfoBar from './InfoBar';
import Menu from './Menu';
import logo from '../../resources/images/logo-dark.png';

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
        zIndex: '0 !important',

    },
    bmMorphShape: {
        top: '58px',
        fill: '#fff',
        zIndex: 0,
    },
    bmItemList: {
        top: '58px',
        padding: '15px',
        zIndex: 0,
    },
    bmOverlay: {
        top: '58px',
        background: 'rgba(0, 0, 0, 0.3)',
    }
};

const menuItems = [
    {
        name: 'Товары',
        link: '/products',
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
        }
    }

    componentWillMount() {
        console.log(window.location.href);
        console.log(this.props.firstLoadedRoute);
        // this.setState({
        //     selected: window.location.href.replace(/(.+\w\/)(.+)/,"/$2")
        // })
        // if (window.location.href && this.state.isMenuOpen) {
        //     setTimeout(() => {
        //         this.handleMenuOpenClose();
        //         console.log('this.props.firstLoadedRoute === window.location && this.state.isMenuOpen')
        //     }, 1000);
        // }
    }

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


    render() {
        console.log(this.state.selected);
        return (
            <Wrapper>
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
                        <img src={logo}/>
                    </LogoLink>
                    {
                        menuItems.map((menuItem, index) =>
                            <MenuItemMobile
                                selected={this.state.selected === menuItem.link}
                                key={index.toString()}
                                onClick={() => {
                                    this.handleMenuOpenClose();
                                    this.handleMenuItemClick(menuItem);
                                }}
                            >
                                <LeftMenuLink to={menuItem.link} selected={this.state.selected === menuItem.link}>
                                    {menuItem.name}
                                </LeftMenuLink>
                            </MenuItemMobile>
                        )
                    }
                </MenuMobile>
                <Content>
                    <InfoBar
                        contacts={this.props.contacts}
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
