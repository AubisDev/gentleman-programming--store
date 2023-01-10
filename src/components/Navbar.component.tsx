import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material"
import logo from '../assets/gp-logo.png';

export const Navbar = () => {

    const handleClick = () => {
        let aboutUsIdSelector = document.getElementById('author')
        aboutUsIdSelector?.scrollIntoView({ behavior:'smooth'})
    }

    const Top = () => window.scrollTo({top:0, behavior: 'smooth'});

    return (
        <Box sx={{ width:'90vw'}}>
            <AppBar position="fixed" color="inherit"  sx={{backgroundColor:'rgba(255,255,255,.8)', height:"12vh",pt:1}}>
            <Toolbar sx={{positon:"relative"}}>
                <Typography variant="h2" component="div" fontFamily='Orbitron' flexDirection='row' display="flex" position='relative' onClick={Top} sx={{ flexGrow: 1 }}>GP 
                    <img src={logo} alt="gp-logo" style={{ width:"100px", height:"80px", position:"absolute",bottom:25 }}/>
                    <Typography variant="h3" display="flex" alignItems='end' mb={0.2} position="relative">
                        Store
                    </Typography>
                </Typography>
                <Button color="inherit" onClick={handleClick}>About us</Button>
            </Toolbar>
            </AppBar>
        </Box>
    )
}
export default Navbar