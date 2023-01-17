import { styled } from "@mui/system";
import Banner from "../../components/PageBanner/PageBanner";
import Content from "./components/Content/Content";
import GalleryPageBannerImg from '../../assets/Images/GalleryPageImgs/GalleryPageBanner.jpg';

const GalleryPageContainer = styled('div')(() => ({
}))

const bannerContent = {
    pageTitle: 'Gallery',
    pageLocation: 'Home - Gallery',
    PageBannerImg: GalleryPageBannerImg
}

const GalleryPage = () => {
    return (
        <GalleryPageContainer>
            <Banner 
                pageTitle={bannerContent.pageTitle} 
                pageLocation={bannerContent.pageLocation}
                PageBannerImg={bannerContent.PageBannerImg}
            />
            <Content />
        </GalleryPageContainer>
    )
}

export default GalleryPage;