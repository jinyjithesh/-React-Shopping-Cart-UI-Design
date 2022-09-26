import { Search } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Container= styled.div

`height:60px;

`

const Wrapper= styled.div
`padding:10px 20px;
display:flex;
justify-content:space-between;
align-item:center;`

const Left= styled.div`flex:1;display:flex;
align-items:center;justify-content:space-between;`
const Language= styled.span`font-size:14px;cursor:pointer;`
const SearchContainer= styled.div`
boarder:0.5px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;`

const Input =styled.input`boarder:none;`
const Logo =styled.h1`fornt-weight:bold;text-alignt:center;`
const Center= styled.div`flex:1;
text-align:center;`
const Right= styled.div`flex:1;display:flex;align-items:center;text-align:center;justify-content:flex-end;`
const MenuItem=styled.div`font-size:14px;cursor:pointer;margin-left:25px;`
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
              <Language>
              Eng
              </Language>
            <SearchContainer>
            <Input/>
            <Search style={{color:"gray",forntSize:"16px",}}/>
            </SearchContainer>
            </Left>
            <Center>
              <Logo>
              LAMA
              </Logo>

            </Center>
            <Right>
<MenuItem>Register</MenuItem>
<MenuItem>Sign In</MenuItem>
<MenuItem> <Badge badgeContent={4} color="secondary">
        <ShoppingCartIcon color="action" />
        
      </Badge></MenuItem>
            </Right>
            </Wrapper>
            </Container>
  )
}

export default Navbar