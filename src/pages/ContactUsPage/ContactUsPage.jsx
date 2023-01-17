import { styled } from "@mui/system";
import Banner from "../../components/PageBanner/PageBanner";
import Content from "./Content/Content";
import ContactUsPageBannerImg from '../../assets/Images/ContactUsPageImgs/ContactUsPageBanner.jpg';

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