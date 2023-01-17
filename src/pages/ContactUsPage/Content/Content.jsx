import { styled } from "@mui/system";
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';

const ContentContainer = styled('div')(() => ({
    padding: '5vw 0',
    margin: '0 auto',
    width: '1000px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
}))

const ContactInfoContainer = styled('div')(() => ({
    width: '100%',
    textAlign: 'center',
    '>h2': {
        color: '#333',
        fontSize: '2vw',
        fontFamily: "'Oswald', sans-serif",
        textTransform: 'uppercase',
        fontWeight: 500,
        margin: 0,
    },
    '>h3': {
        color: '#333',
        margin: '0 0 20px',
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 500,
        fontSize: '18px',
        padding: '16px 0 0',
    }
}))

const ContactInfoList = styled('ul')(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2vw 0',
}))

const ContactInfoListItem = styled('li')(() => ({
    margin: '0 0 20px',
    alignItems: 'center',
    width: '33%',
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    flexDirection: 'column',
    '>span': {
        padding: '10px 0 0',
        fontSize: '20px',
        lineHeight: '24px',
        color: '#333',
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 500,
    },
    '>p': {
        margin: 0,
        color: '#666',
        fontSize: '14px',
        lineHeight: '1.5em',
        fontFamily: "'Mukta Vaani', sans-serif",
    }
}))

const TelIcon = styled(PhoneInTalkOutlinedIcon)(() => ({
    fontSize: '40px',
    color: '#f99e01',
}))

const EmailIcon = styled(EmailOutlinedIcon)(() => ({
    fontSize: '40px',
    color: '#f99e01',
}))

const AddressIcon = styled(PinDropOutlinedIcon)(() => ({
    fontSize: '40px',
    color: '#f99e01',
}))

const ContactFormContainer =  styled('div')(() => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '40px',
    boxShadow: '6px 5px 30px 0 rgba(0,0,0,0.12)',
    borderRadius: '4px',
    flexDirection: 'column',
    '>h2': {
        color: '#333',
        fontSize: '2vw',
        fontFamily: "'Oswald', sans-serif",
        textTransform: 'uppercase',
        fontWeight: 500,
        margin: '0 0 20px',
        lineHeight: '1em',
    },
    '>h3': {
        color: '#666',
        fontFamily: "'Mukta Vaani', sans-serif",
        fontWeight: 'normal',
        fontSize: '14px',
        padding: '0 0 1em',
        lineHeight: '1.5em',
        margin: 0,
    }
}))

const ContactForm = styled('form')(() => ({
    display: 'block',
    '>input': {
        width: '100%',
        border: '1px solid #e5e5e5',
        margin: '0 0 10px 0',
        lineHeight: '46px',
        height: '46px',
        fontSize: '14px',
        padding: '0 10px',
        display: 'block',
    },
    '>textarea': {
        width: '100%',
        height: '130px',
        border: '1px solid #e5e5e5',
        margin: '0 0 20px 0',
        fontSize: '14px',
        padding: '10px',
        display: 'block',
    },
    '>textarea:focus, >input:focus': {
        outline: 'none'
    },
    '>textarea::selection, >input::selection': {
        color: '#fff',
        backgroundColor: '#f99e01',
    },
}))

const SubmitButton = styled('button')(() => ({
    height: '45px',
    lineHeight: '45px',
    backgroundColor: '#f99e01',
    color: '#fff',
    fontSize: '16px',
    textTransform: 'uppercase',
    border: 'none',
    cursor: 'pointer',
    padding: '0 50px',
    fontFamily: "'Mukta Vaani', sans-serif",
}))

const Content = () => {
    return (
        <ContentContainer>
            <ContactInfoContainer>
                <h2>Quick Contact</h2>
                <h3>Email us and we'll get back to you as soon as possible.</h3>
                <ContactInfoList>
                    <ContactInfoListItem>
                        <TelIcon />
                        <span>Tel</span>
                        <p>(08)7001 6136</p>
                    </ContactInfoListItem>
                    <ContactInfoListItem>
                        <EmailIcon />
                        <span>E-mail</span>
                        <p>forkitchens@hotmail.com</p>
                    </ContactInfoListItem>
                    <ContactInfoListItem>
                        <AddressIcon />
                        <span>Address</span>
                        <p>1/25-27 Musgrave Avenue Welland SA 5007</p>
                    </ContactInfoListItem>
                </ContactInfoList>
            </ContactInfoContainer>
            <ContactFormContainer>
                <h2>Contact Form</h2>
                <h3>Fill This So We Can Learn More About You And Your Project.</h3>
                <ContactForm action="post">
                    <input type="text" name="name" placeholder="*Name" required />
                    <input type="email" name="email" placeholder="*Email" required />
                    <input type="tel" name="telephone" placeholder="Telephone" />
                    <textarea name="content" placeholder="*Message" required></textarea>
                    <SubmitButton type="submit">Send</SubmitButton>
                </ContactForm>
            </ContactFormContainer>
        </ContentContainer>
    )
}

export default Content;