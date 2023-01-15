import { styled } from "@mui/system";
import Banner from "./components/Banner/Banner";
import CompanyInfo from "./components/CompanyInfo/CompanyInfo";
import Process from "./components/Process/Process";
import Service from "./components/Service/Service";

const HomePageContainer = styled('div')(() => ({

}))

const HomePage = () => {
    return (
        <HomePageContainer>
            <Banner />
            <CompanyInfo />
            <Process />
            <Service />
        </HomePageContainer>
    )
}

export default HomePage;