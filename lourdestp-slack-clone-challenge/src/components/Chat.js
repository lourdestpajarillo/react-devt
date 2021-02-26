import React from 'react';
import styled from 'styled-components';
import ChatHeader from './ChatHeader';

function Chat() {
    return (
        <Container>
            <ChatHeader />
        </Container>
    )
}

export default Chat

const Container = styled.div`
    display: grid;
    grid-template-rows: 60px auto;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 4px;
    padding-right: 4px;
`;