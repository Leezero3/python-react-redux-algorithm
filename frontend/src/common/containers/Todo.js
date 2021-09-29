import React from "react";
import styled from 'styled-components';

import { TodoInput } from "common";
import { TodoList } from "common";

export default function Todo(){

    return(<>
        <CounterDiv>
        <TodoInput/>
        <TodoList/>
        </CounterDiv>
    </>)
}

const CounterDiv = styled.div`
    text-align: center;
`