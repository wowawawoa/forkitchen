import { styled } from "@mui/system";
import CompanyInfoImg from '../../../../assets/Images/HomePageImgs/CompanyInfoImg.jpg';
import { Link } from "react-router-dom";

const CompanyInfoContainer = styled('div')(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5vw 0',
    width: '1260px',
    margin: '0 auto',
}))

const ImgBox = styled('div')(() => ({
    '>img': {
        maxWidth: '600px',
        objectFit: 'cover',
        border: 0,
        display: 'block',
    }
}))

const ContentContainer = styled('div')(() => ({
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
        fontSize: '2.5vw',
        textTransform: 'uppercase',
        padding: '0 0 1.5vw 0',
        margin: 0,
        fontWeight: 500,
        lineHeight: '2.5vw',
    },
    '>p': {
        fontFamily: "'Mukta Vaani', sans-serif",
        lineHeight: '1.8em',
        margin: '0 0 1em 0',
        color: '#333',
    }
}))

const LinkBox = styled('div')(() => ({
    height: '40px',
    width: '190px',
    padding: '0 50px',
    backgroundColor: '#f99e01',
    '>a': {
        textDecoration: 'none',
        color: '#fff',
        margin: '20px 0 0',
        lineHeight: '40px',
    }
}))

const CompanyInfo = () => {
    return (
        <>
            <CompanyInfoContainer>
                <ImgBox>
                    <img src={`${CompanyInfoImg}`} alt="kitchen display" />
                </ImgBox>
                <ContentContainer>
                    <h2>About Us</h2>
                    <p>Kitchens have transformed into a great place for cooking, conversation and fellowship between family members. Families are spending more time in the kitchen than ever before, so investing more in its aesthetics and conveniences is justified. That is precisely why For Kitchen was founded.</p>
                    <p>With over 5 years of experience in designing kitchens of all types and as a family-owned and operated business, For Kitchen offer customers a more personalized approach to business, along with in-depth expertise in the Kitchen industry.</p>
                    <LinkBox>
                        <Link to={'/about'}>Learn More</Link>
                    </LinkBox>
                </ContentContainer>
            </CompanyInfoContainer>
        </>
    )
}

export default CompanyInfo;