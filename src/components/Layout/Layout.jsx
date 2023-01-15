import { styled } from "@mui/system";
import { Box } from "@mui/material";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Body = styled('div')({
    width: '100%',
});

const PageBox = styled(Box)(() => ({
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    position: 'relative',
    // minHeight: 'calc(100vh - 80px)',
    paddingTop: '80px',
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