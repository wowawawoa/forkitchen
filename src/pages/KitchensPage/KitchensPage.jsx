import { styled } from "@mui/system";
import Banner from "../../components/PageBanner/PageBanner";
import KitchensPageBannerImg from '../../assets/Images/KitchensPageImgs/KitchensPageBanner.jpg';
import Content from "./Content/Content";
const KitchenPageContainer = styled('div')(() => ({
}))

const bannerContent = {
    pageTitle: 'Kitchens',
    pageLocation: 'Home - Kitchens',
    PageBannerImg: KitchensPageBannerImg
}

const KitchensPage = () => {
    return (
        <KitchenPageContainer>
            <Banner 
                pageTitle={bannerContent.pageTitle} 
                pageLocation={bannerContent.pageLocation}
                PageBannerImg={bannerContent.PageBannerImg}
            />
            <Content />
        </KitchenPageContainer>
    )
}

export default KitchensPage;