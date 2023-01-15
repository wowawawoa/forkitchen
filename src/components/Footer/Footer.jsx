import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const FooterContainer = styled('div')(() => ({
    padding: '40px 0 0',
    backgroundColor: '#222',
}))

const InfoContainer = styled('div')(() => ({
    width: '1260px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
}))

const InfoItemContainer = styled('div')(() => ({
    '>h4': {
        fontSize: '21px',
        textTransform: 'uppercase',
        padding: '0 0 20px',
        color: '#fff',
        fontFamily: "'Oswald', sans-serif",
        fontWeight: 500,
        lineHeight: '1.5em',
        margin: 0,
    },
    '>p': {
        color: '#fff',
        opacity: 0.7,
        fontSize: '14px',
        padding: 0,
        margin: 0,
        fontFamily: "'Mukta Vaani', sans-serif",
        lineHeight: '1.5em',
    }
}))

const ContactList = styled('ul')(() => ({
    margin: 0,
    padding: 0,
}))

const ContactListItem = styled('li')(() => ({
    listStyle: 'none',
    margin: '0 0 10px',
    padding: 0,
    '>p': {
        color: '#fff',
        opacity: 0.7,
        fontSize: '14px',
        padding: 0,
        margin: 0,
        fontFamily: "'Mukta Vaani', sans-serif",
        lineHeight: '1.5em',
    },
}))

const QuickLinkItem = styled(Link)(() => ({
    fontSize: '14px',
    display: 'block',
    margin: '0 20px 10px 0',
    padding: '0 0 0 15px',
    color: '#fff',
    opacity: 0.7,
    textDecoration: 'none',
    fontFamily: "'Mukta Vaani', sans-serif",
    lineHeight: '1.5em',
}))

const Footer = () => {
    return (
        <FooterContainer>
            <InfoContainer>
                <InfoItemContainer style={{width: '22%'}}>
                    <h4>About Us</h4>
                    <p>Whether you require readymade or custom kitchen renovation for your home, For Kitchen can undertake it from planning to completion stage, providing an ageless masterpiece made just for you. Our expert kitchen designers will guarantee your kitchen renovation experience is not only gentle and cost-effective but also attractive, both in functionality and looks.</p>
                </InfoItemContainer>
                <InfoItemContainer style={{width: '24%'}}>
                    <h4>Contact Us</h4>
                    <ContactList>
                        <ContactListItem>
                            <p>Tel : (08)7001 6136</p>
                        </ContactListItem>
                        <ContactListItem>
                            <p>E-mail : forkitchens@hotmail.com</p>
                        </ContactListItem>
                        <ContactListItem>
                            <p>Address : 1/25-27 Musgrave Avenue Welland SA 5007</p>
                        </ContactListItem>
                    </ContactList>
                </InfoItemContainer>
                <InfoItemContainer style={{width: '16%'}}>
                    <h4>Quick Link</h4>
                    <QuickLinkItem to='/'>Home</QuickLinkItem>
                    <QuickLinkItem to='/about'>About Us</QuickLinkItem>
                    <QuickLinkItem to='/kitchens'>Kitchens</QuickLinkItem>
                    <QuickLinkItem to='/gallery'>Galley</QuickLinkItem>
                    <QuickLinkItem to='/contact'>Contact Us</QuickLinkItem>
                </InfoItemContainer>
                <InfoItemContainer style={{width: '22%'}}>
                    <h4>Send Message</h4>
                    
                </InfoItemContainer>
            </InfoContainer>
        </FooterContainer>
    )
}

export default Footer