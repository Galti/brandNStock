import React from 'react';
import PropTypes from 'prop-types';
import {IconButton} from 'material-ui';
import DeleteIcon from 'material-ui-icons/Menu';
import MdDrafts from 'react-icons/lib/md/drafts';
import MdLocalPhone from 'react-icons/lib/md/local-phone';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import {
    Wrapper,
    Logo,
    Tabs, Tab,
    TabUnderline,
    HamburgerButton,
    RightMenuButton,
    MdMenu,
    InfoA,
    IconSpan,
    Link,
} from './StyledComponents';
import logo from '../../../resources/images/logo-light.png';

class Menu extends React.Component {
    state = {
        anchorEl: null,
        open: false,
    };

    handleRightMenuButtonClick = (event) => {
        this.setState({ open: true, anchorEl: event.currentTarget });
    };

    handleRightMenuClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Wrapper>
                    <HamburgerButton>
                        <IconButton aria-label="Delete" onClick={this.props.onMenuOpenClose}>
                            <DeleteIcon style={{width: '30px', height: '30px'}}/>
                        </IconButton>
                    </HamburgerButton>
                    <Link to='/' style={{ zIndex: 100 }}>
                        <Logo><img src={logo} height='56px'/></Logo>
                    </Link>
                    <Tabs>
                        {
                            this.props.menuItems.map((menuItem, index) => (
                                <Tab
                                    key={index.toString()}
                                    onClick={() => this.props.onMenuItemClick(menuItem)}
                                    index={index}
                                >
                                    <Link to={menuItem.link}>{menuItem.name}</Link>
                                    <TabUnderline selected={this.props.selected === `/#${menuItem.link}`}/>
                                </Tab>
                            ))
                        }
                    </Tabs>
                    <RightMenuButton
                        aria-label="More"
                        aria-owns={this.state.open ? 'long-menu' : null}
                        aria-haspopup="true"
                        onClick={this.handleRightMenuButtonClick}
                    >
                        <MoreVertIcon />
                    </RightMenuButton>
                    <MdMenu
                        id="long-menu"
                        anchorEl={this.state.anchorEl}
                        open={this.state.open}
                        onRequestClose={this.handleRightMenuClose}
                        PaperProps={{
                            style: {
                                maxHeight: 100,
                                width: 250,
                            },
                        }}
                    >
                        <InfoA href={`mailto:${this.props.contacts.email}`}>
                            <IconSpan>
                                <MdDrafts/>
                            </IconSpan>
                            {this.props.contacts.email}
                        </InfoA>
                        <InfoA href={`tel:${this.props.contacts.phone}`}>
                            <IconSpan>
                                <MdLocalPhone/>
                            </IconSpan>
                            {this.props.contacts.phone}
                        </InfoA>
                    </MdMenu>
                </Wrapper>
            </div>
        )
    }
}

Menu.propTypes = {
    onMenuOpenClose: PropTypes.func,
    onMenuItemClick: PropTypes.func,
    menuItems: PropTypes.array,
    selected: PropTypes.string,
    isMenuOpen: PropTypes.bool,
    contacts: PropTypes.object,
};

export default Menu;
