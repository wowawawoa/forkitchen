import { styled } from "@mui/system";
import Banner from "../../components/PageBanner/PageBanner";
import Content from "./Content/Content";

const KitchensPageBannerImg = 'https://forkitchen.s3.ap-northeast-1.amazonaws.com/Images/KitchensPageImgs/KitchensPageBanner.jpg'

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