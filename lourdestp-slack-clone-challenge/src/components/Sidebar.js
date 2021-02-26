import React from 'react';
import styled from 'styled-components';
import {sidebarMainItems} from '../data/SidebarData';
import {sidebarChannelItems} from '../data/SidebarData';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

function Sidebar() {
    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    Clever Programmer
                </Name>
                <NewMessage>
                    <AddCircleOutlineOutlinedIcon />
                </NewMessage>
            </WorkspaceContainer>
            <MainChannels>
                {
                    sidebarMainItems.map(item => (
                        <MainChannelItem>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                    ))
                }
                <MainChannelItem>
                    <AddCircleOutlineOutlinedIcon />
                    Add
                </MainChannelItem>
            </MainChannels>

            <ChannelsContainer>
              <NewChannelContainer>
                Channels
                <NewChannel>
                    <AddOutlinedIcon />
                </NewChannel>
              </NewChannelContainer>
              <ChannelsList>
                {
                    sidebarChannelItems.map(item => (
                        <Channel>
                            # {item.text}
                        </Channel>
                    ))
                }
              </ChannelsList>
            </ChannelsContainer>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    background: purple;
    color: white;
`

const WorkspaceContainer = styled.div`
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 16px;
    font-weight: bold;
    justify-content: space-between;
    border-bottom: 1px solid #532753;
`

const Name = styled.div``

const NewMessage = styled.div`
    width: 28px;
    height: 28px;
    background: white;
    color: #3f0e40;
    fill: #3f0e40;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 16px;
    cursor: pointer;
`

const MainChannels = styled.div`
    padding-top: 20px;
`

const MainChannelItem = styled.div`
    color: rgb(188,171,188);
    display: grid;
    grid-template-columns: 15% auto;
    height: 30px;
    align-items: center;
    padding-left: 16px;
    cursor: pointer;

    :hover {
        background: #350d36;
    }
`

const ChannelsContainer = styled.div`
    color: rgb(188,171,188);
    margin-top: 10px;
`

const NewChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    padding-left: 16px;
    padding-right: 16px;
`

const ChannelsList = styled.div``

const Channel = styled.div`
    display: flex;
    align-items: center;
    height: 28px;
    padding-left: 16px;
    cursor: pointer;

    :hover {
        background: #350d36;
    }
`

const NewChannel = styled.div`
    width: 28px;
    height: 28px;
    //background: white;
    //color: #3f0e40;
    //fill: #3f0e40;
    //display: flex;
    //justify-content: center;
    //align-items: center;
    //border-radius: 50%;
    //margin-right: 16px;
    cursor: pointer;
`