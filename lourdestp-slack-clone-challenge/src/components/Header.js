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
    justify-content: center;
    position: relative;
    box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`

const Main = styled.div`
    display: flex;
    align-items: center;
    margin-left: 16px;
    margin-right: 16px; 
`

const SearchContainer = styled.div`
    min-width: 400px;
    margin-left: 16px;
    margin-right: 16px;
`

const Search = styled.div`
    box-shadow: inset 0 0 0 1px  rgb(128 128 128);
    width: 100%;
    border-radius: 6px;
    display: flex;
    align-items: center;

    input {
        background-color: transparent;
        border: none;
        padding-left: 8px;
        padding-right: 8px;
        padding-top: 4px;
        padding-bottom: 4px;
        color: white;
        width: 384px;
    }

    input:focus {
        outline: none;
    }
`

const UserContainer = styled.div`
    font-weight: bold;
    display: flex;
    align-items: center;
    padding-right: 16px;
    position: absolute;
    right: 0;
`

const Name = styled.div`
    padding-right: 8px;
`

const UserImage = styled.div`
    width: 28px;
    height: 28px;
    //border: 2px solid white;
    //border-radius: 3px;

    img {
        width: 100%;
    }
`