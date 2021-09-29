import React from "react";
import styled from 'styled-components';

import { UserJoin } from "common";
import { UserList } from "common";

export default function Todo(){

    return(<>
        <CounterDiv>
        <UserJoin/>
        <UserList/>
        </CounterDiv>
    </>)
}

const CounterDiv = styled.div`
    text-align: center;
`