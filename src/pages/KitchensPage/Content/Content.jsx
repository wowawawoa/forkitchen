import { styled } from "@mui/system";

const ContentContainer = styled('div')(() => ({
    padding: '5vw 0',
    margin: '0 auto',
    width: '1260px',
}))

const InfoTextContainer = styled('div')(() => ({
    '>p': {
        margin: '0 0 1em',
        lineHeight: '1.5em',
    }
}))

const Content = () => {
    return (
        <ContentContainer>
            <InfoTextContainer>
                <p>For Kitchen are experts when it comes to building custom kitchens. We can specially design and build to meet your unique needs. Custom made kitchen is designed as per your needs and requirements, precisely the way you want it to be, which will be distinctive to you.</p>
                <p>At For Kitchen, our expert kitchen designers will work with you and provide valuable inputs for creating custom kitchens that are highly functional, inspiring, and unique. The custom kitchen will become the centerpiece of your living space and add great value to your home.</p>
                <p>An outdoor kitchen is enjoyable as you're able to breathe some fresh air and see greenery all around. Well, we design and build beautiful custom outdoor kitchens too! Nonetheless, if you're looking for a readymade kitchen then we also have them in standard sizes.</p>
            </InfoTextContainer>
        </ContentContainer>
    )
}

export default Content;