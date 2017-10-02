import React from 'react';
import { Wrapper, Content } from './StyledComponents';
import InfoBar from './InfoBar';

class Header extends React.Component {
    render () {
        return (
            <Wrapper>
                <Content>
                    <InfoBar/>
                </Content>
            </Wrapper>
        )
    }
}

export default Header;
