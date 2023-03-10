import { styled } from "@mui/system";
import { Box } from "@mui/material";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Body = styled('div')({
    width: '100%',
});

const PageBox = styled(Box)(({theme}) => ({
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    position: 'relative',
    fontFamily: "'Mukta Vaani', sans-serif",
    paddingTop: '80px',
    [theme.breakpoints.down('md')]: {
        paddingTop: '50px',
    },
}))

const Layout = () => {
    return (
        <Body>
            <Header />
            <PageBox>
                <Outlet />
            </PageBox>
            <Footer />
        </Body>
    )
}

export default Layout;