import React from 'react'
import styled from 'styled-components';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';

function ChatHeader() {
    return (
        <Container>
            <ChannelInfo>
                <ChannelName>
                    # clever
                    <FavoriteIcon>
                        <StarBorderOutlinedIcon />
                    </FavoriteIcon>
                </ChannelName>
                <ChannelDetails>
                    Details
                    <DetailsIcon>
                        <ErrorOutlineOutlinedIcon />
                    </DetailsIcon>
                </ChannelDetails>
            </ChannelInfo>
            <ChannelMessage>
                Company-wide announcements and work-based matters
            </ChannelMessage>
        </Container>
    )
}

export default ChatHeader

const Container = styled.div`
    display: grid;
    grid-template-rows: 50% auto;
    align-items: center;
    padding-left: 8px;
    padding-right: 8px;
`

const ChannelInfo = styled.div`
    display: flex;
    justify-content: space-between;
`

const ChannelDetails = styled.div`
    font-size: smaller;
    display: flex;
    align-items: center;
    color: rgb(188,171,188);
`

const DetailsIcon = styled.div`
    padding-left: 4px;
`

const ChannelName = styled.div`
    font-weight: bold;
    display: flex;
    align-items: center;
`

const FavoriteIcon = styled.div`
    cursor: pointer;
    padding-left: 4px;
`

const ChannelMessage = styled.div`
    color: rgb(188,171,188);
    display: flex;
    align-items: center;
    font-size: smaller;
    white-space: nowrap;
`