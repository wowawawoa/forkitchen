import { styled } from '@mui/system';
import { NavLink } from "react-router-dom";
import { navs } from '../../Header';
import { Drawer, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const MenuButton = styled(MenuIcon)(() => ({
    color: '#fff',
}));

const MainMenuDrawer = styled(Drawer)({
    '& >.MuiPaper-root': {
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
});

const CloseButton = styled(Button)({
    color: '#fff',
    padding: '0',
    position: 'absolute',
    right: '53px',
    top: '41px',
    minWidth: 'auto',
});

const NavBox = styled('ul')(() => ({
    padding: 0,
    margin: '77px 40px 20px',
}))

const NavList = styled('li')(({ theme }) => ({
    listStyle: 'none',
    borderBottom: '1px solid #f5f5f5',
    padding: '0 25px',
    '>a': {
        lineHeight: '50px',
        fontSize: '18px',
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 500,
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: '#fff',
    },
    [theme.breakpoints.down('lg')]: {
        '>a': {
            fontSize: '16px',
        }
    },
}))

const MobileNav = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <>
            <MenuButton onClick={() => setOpenDrawer(true)} />
            <MainMenuDrawer anchor={'right'} open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <CloseButton onClick={() => setOpenDrawer(false)}>
                    <CloseIcon />
                </CloseButton>
                <NavBox>
                    {navs.map((nav) => (
                        <NavList key={nav.id}>
                            <NavLink to={nav.link} onClick={() => setOpenDrawer(false)}>
                                {nav.name}
                            </NavLink>
                        </NavList>
                    ))}
                </NavBox>
            </MainMenuDrawer>
        </>
    );
};
export default MobileNav;
