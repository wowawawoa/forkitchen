import { styled } from "@mui/system";
import Banner from "../../components/PageBanner/PageBanner";
import Content from "./components/Content/Content";
import AboutUsPageBannerImg from '../../assets/Images/AboutUsPageImgs/AboutUsPageBanner.jpg';

const AboutUsPageContainer = styled('div')(() => ({
}))

const pageContent = {
    pageTitle: 'About Us',
    pageLocation: 'Home - About Us',
    PageBannerImg: AboutUsPageBannerImg
}

const AboutUsPage = () => {
    return (
        <AboutUsPageContainer>
            <Banner 
                pageTitle={pageContent.pageTitle} 
                pageLocation={pageContent.pageLocation}
                PageBannerImg={pageContent.PageBannerImg}
            />
            <Content />
        </AboutUsPageContainer>
    )
}

export default AboutUsPage;