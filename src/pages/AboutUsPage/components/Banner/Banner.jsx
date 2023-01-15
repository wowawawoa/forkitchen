import { styled } from "@mui/system";
import AboutUsPageBannerImg from '../../../../assets/Images/AboutUsPageImgs/AboutUsPageBanner.jpg';

const BannerContainer = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
}))

const BannerTextContainer = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    position: 'absolute',
    '>h2': {
        color: '#fff',
        fontSize: '1.5vw',
        lineHeight: '1em',
        textTransform: 'capitalize',
        margin: 0,
        fontWeight: 500,
        textAlign: 'center',
    },
    zIndex: 2,
}))

const PageLocationBox = styled('div')(() => ({
    '>p': {
        color: '#fff',
        lineHeight: '1.5em',
        padding: 0,
        margin: 0,
        fontSize: '16px',
    }
}))

const BannerImg = styled('div')(() => ({
    width: '100%',
    '>img': {
        width: '100%',
        objectFit: 'cover',
        display: 'block',
    }
}))

const BannerMask = styled('div')(() => ({
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    position: 'absolute',
    opacity: 0.2,
}))

const Banner = () => {
    return (
        <BannerContainer>
            <BannerTextContainer>
                <h2>About Us</h2>
                <PageLocationBox>
                    <p>Home - About Us</p>
                </PageLocationBox>
            </BannerTextContainer>
            <BannerImg>
                <BannerMask />
                <img src={`${AboutUsPageBannerImg}`} alt="about us page banner" />
            </BannerImg>
        </BannerContainer>
    )
}

export default Banner;