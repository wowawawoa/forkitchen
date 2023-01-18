import { styled } from "@mui/system";
import Banner from "../../components/PageBanner/PageBanner";
import Content from "./Content/Content";

const ContactUsPageBannerImg = 'https://forkitchen.s3.ap-northeast-1.amazonaws.com/Images/ContactUsPageImgs/ContactUsPageBanner.jpg';

const ContactUsPageContainer = styled('div')(() => ({
}))

const bannerContent = {
    pageTitle: 'Contact Us',
    pageLocation: 'Home - Contact Us',
    PageBannerImg: ContactUsPageBannerImg
}

const AboutUsPage = () => {
    return (
        <ContactUsPageContainer>
            <Banner 
                pageTitle={bannerContent.pageTitle} 
                pageLocation={bannerContent.pageLocation}
                PageBannerImg={bannerContent.PageBannerImg}
            />
            <Content />
        </ContactUsPageContainer>
    )
}

export default AboutUsPage;