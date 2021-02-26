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
    grid-template-rows: 40px auto;
`;