import { Link, NavLink } from "react-router-dom";
import { styled } from "@mui/system";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const HeaderContainer = styled('div')(() => ({
    display: 'flex',
    width: '100%',
    flexWrap: 'warp',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 40px',
    position: 'fixed',
    zIndex: 999,
    backgroundColor: '#fff',
}))

const LogoBox = styled('div')(() => ({
    '>a': {
        textDecoration: 'none',
        color: '#333',
        WebkitTapHighlightColor: 'rgba(0,0,0,0)'
    },
    '>a>h1': {
        color: '#000',
        fontSize: '32px',
        textTransform: 'uppercase',
        fontFamily: "'Oswald', sans-serif",
        lineHeight: '1em',
        fontWeight: 500,
        margin: 0,
    }
}))

const NavContainer = styled('div')(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
}))

const NavBox = styled('ul')(() => ({
    display: 'flex',
    padding: 0,
    margin: 0,
}))

const NavList = styled('li')(() => ({
    listStyle: 'none',
    padding: '0 25px',
    '>a': {
        lineHeight: '80px',
        fontSize: '18px',
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 500,
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: '#333',
        ':hover': {
            color: '#f99e01',
            transition: '0.4s',
        }
    }
}))

const PhoneNumContainer = styled('div')(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '40px',
    '>p': {
        color: 'rgba(0,0,0,0.87)',
        fontWeight: 600,
        fontSize: '24px',
        margin: 0,
    }
}))

const IconBox = styled('div')(() => ({
    backgroundColor: '#f99e01',
    height: '36px',
    width: '36px',
    borderRadius: '4px',
    marginRight: '15px',
    textAlign: 'center',
    lineHeight: '40px',
}))

const StyledPhoneInTalkIcon = styled(PhoneInTalkIcon)(() => ({
    backgroundColor: '#f99e01',
    color: '#fff',
    height: '36px',
    width: '24px',
}))

const activeStyle = {
    color: '#f99e01',
    textDecoration: 'underline',
    textUnderlineOffset: '8px',
}

const navs = [
    {id: 1, link: '/', name: 'Home'},
    {id: 2, link: '/about', name: 'About Us'},
    {id: 3, link: '/kitchens', name: 'Kitchens'},
    {id: 4, link: '/gallery', name: 'Gallery'},
    {id: 5, link: '/contact', name: 'Contact Us'},
]

const Header = () => {
    return (
        <HeaderContainer>
            <LogoBox>
                <Link to="/"><h1>For Kitchen</h1></Link>
            </LogoBox>
            <NavContainer>
                <NavBox>
                    {navs.map((nav) => (
                        <NavList key={nav.id}>
                            <NavLink 
                                to={nav.link} 
                                style={({isActive}) => isActive ? activeStyle : undefined}
                            >
                                {nav.name}
                            </NavLink>
                        </NavList>
                    ))}
                </NavBox>
                <PhoneNumContainer>
                    <IconBox>
                        <StyledPhoneInTalkIcon />
                    </IconBox>
                    <p>(08) 7001 6136</p>
                </PhoneNumContainer>
            </NavContainer>
        </HeaderContainer>
    )
}

export default Header