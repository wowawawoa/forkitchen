import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import HomePageBannerImg from '../../../../assets/Images/HomePageImgs/HomePageBanner.jpg';

const BannerContainer = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
}))

const BannerTextContainer = styled('div')(() => ({
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: '40px 4.5vw 20px',
    position: 'absolute',
    '>h2': {
        color: '#fff',
        fontSize: '3vw',
        lineHeight: '1em',
        paddingBottom: '0.5em',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        margin: 0
    },
    '>p': {
        color: '#fff',
        fontSize: '20px',
        padding: '0 20%'
    },
    zIndex: 2,
}))

const ContactLinkBox = styled('div')(() => ({
    padding: '0 50px',
    lineHeight: '50px',
    backgroundColor: '#f99e01',
    fontWeight: 'bold',
    margin: '40px auto',
    width: '195px',
    '>a': {
        textDecoration: 'none',
        color: '#fff',
        fontWeight: 'bold',
    },
}))

const BannerImg = styled('div')(() => ({
    width: '100%',
    height: '70vh',
    '>img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    }
}))

const BannerMask = styled('div')(() => ({
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    position: 'absolute',
    opacity: 0.1,
}))

const Banner = () => {
    return (
        <BannerContainer>
            <BannerTextContainer>
                <h2>Custom Kitchen Design</h2>
                <p>Make your dream kitchen a reality with our kitchen design services</p>
                <ContactLinkBox>
                    <Link to='/contact'>Consult Now</Link>
                </ContactLinkBox>
            </BannerTextContainer>
            <BannerImg>
                <BannerMask />
                <img src={`${HomePageBannerImg}`} alt="home page banner" />
            </BannerImg>
        </BannerContainer>
    )
}

export default Banner;