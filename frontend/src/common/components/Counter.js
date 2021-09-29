import React, {useState} from "react";
import { Button } from "@mui/material";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';

export default function Counter(){
    const [count, setCount] = useState(0)

    return(<CounterDiv>
        { count === 0 && <Stack sx={{ width: '200px', 'margin': '0 auto' }} spacing={2} >
            <Alert severity="warning">
                <AlertTitle>Warning</AlertTitle>
                더 이상 삭제할 메일이 없습니다
            </Alert>
        </Stack>}
        <br/>

        <Badge badgeContent={count >= 0 ? count : (0)} color="primary" style={{marginBottom:'20px'}} >
        <MailIcon color="action" />
        </Badge>
        <br/>
        <SpanStyle>
        <Button variant="outlined" onClick={()=> setCount(count + 1)}>
            Add
        </Button>
        <Button variant="outlined" onClick={()=> setCount(count - 1)}>
            Delete
        </Button>
        </SpanStyle>
    </CounterDiv>)
}
 

const CounterDiv = styled.div`
    text-align: center;
`
const SpanStyle = styled.span `
    margin: 100px
`