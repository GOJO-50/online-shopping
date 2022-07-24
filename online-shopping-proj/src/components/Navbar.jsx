import '../style/navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//import styled from 'styled-components'

//const container = 

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='wrapper'>
                <div className='left'>
                    <h1 className='logo'> AYE Ventures</h1>
                </div>
                <div className='center'>
                   <div className='search-container'>
                    <input className='input-search' placeholder='search'>
                        
                    </input>
                   <SearchIcon style={{color:"black", fontSize:16, marginLeft: "20px",}}/>
                    </div> 
                </div>
                <div className='right'>
                <span className='language'>
                        EN
                    </span>
                    <div className='menu-item'> Register</div>
                    <div className='menu-item'> Sign-in</div>
                    <div className='menu-item'> 
                    <Badge badgeContent={3} color="primary">
                          <MailIcon color="black" />
                    </Badge>
                    </div>
                    
                    <div className='menu-item'>
                    <Badge badgeContent={1} color="primary">
                    <ShoppingCartIcon/>
                    </Badge>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar; 