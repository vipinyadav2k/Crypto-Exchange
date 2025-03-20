import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
  <HStack p={'3'} shadow={'base'} bgColor={'blackAlpha.900'}>
    
    <Button variant={'unstyled'} color={'white'}> 
    <Link to="/">Home</Link>
    </Button>

    <Button paddingLeft={'10'} paddingRight={'10'} variant={'unstyled'} color={'white'}> 
    <Link to="/Exchanges">Exchanges</Link>
    </Button>

    <Button variant={'unstyled'} color={'white'}> 
    <Link to="/Coins">Coins</Link>
    </Button>

  </HStack>
    
  </>
  )
}

export default Header