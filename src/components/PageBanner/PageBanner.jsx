import { styled } from "@mui/system";

const BannerContainer = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
}))

const BannerTextContainer = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    position: 'absolute',
    gap: '10px',
    '>h2': {
        color: '#fff',
        fontSize: '24px',
        lineHeight: '24px',
        textTransform: 'capitalize',
        margin: 0,
        fontWeight: 500,
        textAlign: 'center',
        fontFamily: "'Oswald', sans-serif",
    },
    zIndex: 2,
    [theme.breakpoints.down('md')]: {
        '>h2': {
            fontSize: '18px',
            lineHeight: '18px',
        }
    }
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
    minHeight: '72px',
    width: '100%',
    '>img': {
        width: '100%',
        objectFit: 'cover',
        display: 'block',
        minHeight: '72px',
    }
}))

const BannerMask = styled('div')(() => ({
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    position: 'absolute',
    opacity: 0.2,
}))

const Banner = ({ pageTitle, pageLocation, PageBannerImg }) => {
    return (
        <BannerContainer>
            <BannerTextContainer>
                <h2>{pageTitle}</h2>
                <PageLocationBox>
                    <p>{pageLocation}</p>
                </PageLocationBox>
            </BannerTextContainer>
            <BannerImg>
                <BannerMask />
                <img src={`${PageBannerImg}`} alt="about us page banner" />
            </BannerImg>
        </BannerContainer>
    )
}

export default Banner;