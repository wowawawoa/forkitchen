import { styled } from "@mui/system";
import Banner from "../../components/PageBanner/PageBanner";
import KitchensPageBannerImg from '../../assets/Images/KitchensPageImgs/KitchensPageBanner.jpg';

const KitchenPageContainer = styled('div')(() => ({
}))

const pageContent = {
    pageTitle: 'Kitchens',
    pageLocation: 'Home - Kitchens',
    PageBannerImg: KitchensPageBannerImg
}

const KitchenPage = () => {
    return (
        <KitchenPageContainer>
            <Banner 
                pageTitle={pageContent.pageTitle} 
                pageLocation={pageContent.pageLocation}
                PageBannerImg={pageContent.PageBannerImg}
            />
        </KitchenPageContainer>
    )
}

export default KitchenPage;