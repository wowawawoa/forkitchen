import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const AboutUsImg = 'https://forkitchen.s3.ap-northeast-1.amazonaws.com/Images/HomePageImgs/CompanyInfoImg.jpg'

const AboutUsContainer = styled('div')(({theme}) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '72px 0',
    width: '1260px',
    margin: '0 auto',
    [theme.breakpoints.down('lg')]: {
        padding: '32px',
        width: '100%',
    },
}))

const ImgBox = styled('div')(({theme}) => ({
    '>img': {
        maxWidth: '600px',
        objectFit: 'cover',
        border: 0,
        display: 'block',
    },
    [theme.breakpoints.down('lg')]: {
        display: 'none',
    },
}))

const ContentContainer = styled('div')(({theme}) => ({
    width: '52%',
    boxShadow: '10px 17px 30px 0px rgba(80, 44, 122, 0.12)',
    padding: '40px',
    position: 'relative',
    left: '-40px',
    zIndex: 2,
    backgroundColor: '#fff',
    margin: '5% 0',
    '>h2': {
        fontFamily: "'Oswald', sans-serif",
        fontSize: '32px',
        textTransform: 'uppercase',
        padding: '0 0 18px 0',
        margin: 0,
        fontWeight: 500,
        lineHeight: '32px',
    },
    '>p': {
        fontFamily: "'Mukta Vaani', sans-serif",
        lineHeight: '1.8em',
        margin: '0 0 1em 0',
        color: '#333',
    },
    [theme.breakpoints.down('lg')]: {
        width: '100%',
        boxShadow: 'none',
        padding: 0,
        left: 0,
        margin: 0,
        '>h2': {
            fontSize: '24px',
            lineHeight: '24px',
            textAlign: 'center',
        }
    },
}))

const LinkBox = styled('div')(({theme}) => ({
    height: '40px',
    width: '190px',
    padding: '0 50px',
    backgroundColor: '#f99e01',
    '>a': {
        textDecoration: 'none',
        color: '#fff',
        margin: '20px 0 0',
        lineHeight: '40px',
    },
    [theme.breakpoints.down('lg')]: {
        margin: '0 auto',
    },
}))

const AboutUs = () => {
    return (
        <>
            <AboutUsContainer>
                <ImgBox>
                    <img src={AboutUsImg} alt="kitchen display" />
                </ImgBox>
                <ContentContainer>
                    <h2>About Us</h2>
                    <p>Kitchens have transformed into a great place for cooking, conversation and fellowship between family members. Families are spending more time in the kitchen than ever before, so investing more in its aesthetics and conveniences is justified. That is precisely why For Kitchen was founded.</p>
                    <p>With over 5 years of experience in designing kitchens of all types and as a family-owned and operated business, For Kitchen offer customers a more personalized approach to business, along with in-depth expertise in the Kitchen industry.</p>
                    <LinkBox>
                        <Link to={'/about'}>Learn More</Link>
                    </LinkBox>
                </ContentContainer>
            </AboutUsContainer>
        </>
    )
}

export default AboutUs;