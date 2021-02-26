import React from 'react'
import styled from 'styled-components';

function ChatHeader() {
    return (
        <Container>
            Header
        </Container>
    )
}

export default ChatHeader

const Container = styled.div`
    background-color: pink;
    display: flex;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 20px;
`