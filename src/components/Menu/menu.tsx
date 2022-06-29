import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import { MenuContainer } from './styled-menu'

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <MenuContainer>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon style={{ color: 'white' }} fontSize="large" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link style={{ textDecoration: 'none' }} to="/">
            Home
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link style={{ textDecoration: 'none' }} to="/classes">
            Aulas
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>Contato</MenuItem>
        <MenuItem onClick={handleClose}>Sobre</MenuItem>
      </Menu>
    </MenuContainer>
  )
}
