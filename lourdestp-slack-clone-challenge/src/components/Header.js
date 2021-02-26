import React from 'react';
import styled from 'styled-components';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <Container>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search..." />
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>
            <UserContainer>
                <Name>
                    Lourdes
                </Name>
                <UserImage>
                    <img src="https://img.icons8.com/officexs/32/000000/user-female.png"/>
                </UserImage>
            </UserContainer>
        </Container>
    )
}

export default Header

const Container = styled.div`
    background: purple;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Main = styled.div`
    display: flex;
    align-items: center;
`

const SearchContainer = styled.div``

const Search = styled.div``

const UserContainer = styled.div`
    display: flex;
    align-items: center;
`

const Name = styled.div``

const UserImage = styled.div``