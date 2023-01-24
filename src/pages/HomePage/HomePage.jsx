import { styled } from "@mui/system";
import Banner from "./components/Banner/Banner";
import AboutUs from "./components/CompanyInfo/AboutUs";
import Process from "./components/Process/Process";
import Service from "./components/Service/Service";

const HomePageContainer = styled('div')(() => ({
}))

const HomePage = () => {
    return (
        <HomePageContainer>
            <Banner />
            <AboutUs />
            <Process />
            <Service />
        </HomePageContainer>
    )
}

export default HomePage;