import { styled } from "@mui/system";
import Banner from "../../components/PageBanner/PageBanner";
import Content from "./components/Content/Content";

const AboutUsPageBannerImg = 'https://forkitchen.s3.ap-northeast-1.amazonaws.com/Images/AboutUsPageImgs/AboutUsPageBanner.jpg';

const AboutUsPageContainer = styled('div')(() => ({
}))

const bannerContent = {
    pageTitle: 'About Us',
    pageLocation: 'Home - About Us',
    PageBannerImg: AboutUsPageBannerImg
}

const AboutUsPage = () => {
    return (
        <AboutUsPageContainer>
            <Banner 
                pageTitle={bannerContent.pageTitle} 
                pageLocation={bannerContent.pageLocation}
                PageBannerImg={bannerContent.PageBannerImg}
            />
            <Content />
        </AboutUsPageContainer>
    )
}

export default AboutUsPage;