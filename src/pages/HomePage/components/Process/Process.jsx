import { styled } from '@mui/system';
import ProcessBg from '../../../../assets/Images/HomePageImgs/ProcessBg.jpg';
import CheckIcon from '@mui/icons-material/Check';
import { List, ListItem, ListItemIcon } from '@mui/material';

const ProcessContainer = styled('div')(() => ({
    backgroundImage: `url(${ProcessBg})`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}))

const ContentContainer = styled('div')(() => ({
    width: '1260px',
    margin: '0 auto',
    padding: '2.5vw 0',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    '>h2': {
        fontFamily: "'Oswald', sans-serif",
        fontSize: '2.5vw',
        textTransform: 'uppercase',
        color: '#fff',
        padding: '0 0 1.5vw 0',
        margin: 0,
        fontWeight: 500,
        lineHeight: '2.5vw',
    }
}))

const ProcessList = styled(List)(() => ({
    paddingTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
}))

const ProcessListItem = styled(ListItem)(() => ({
    color: '#fff',
    '>p': {
        fontFamily: "'Mukta Vaani', sans-serif",
        margin: 0,
        padding: 0,
        lineHeight: '1.5em',
    }
}))

const StyledListIcon = styled(ListItemIcon)(() => ({
    color: '#fff',
    minWidth: '40px'
}))

const processes = [
    { id: 1, info: "Initially, we'll work closely with you to understand your requirements and come up with the design." },
    { id: 2, info: "Next, we present a quote and timelines for the same." },
    { id: 3, info: "Once this is approved, we'll develop the design and install it in the promised timeframe." },
    { id: 4, info: "All our staff members are very cordial and would be happy to answer your questions, leaving you completely satisfied with the experience." }
]

const Process = () => {
    return (
        <ProcessContainer>
            <ContentContainer>
                <h2>Our Process</h2>
                <ProcessList>
                    {processes.map((process) => (
                        <ProcessListItem key={process.id}>
                            <StyledListIcon>
                                <CheckIcon />
                            </StyledListIcon>
                            <p>{process.info}</p>
                        </ProcessListItem>
                    ))}
                </ProcessList>
            </ContentContainer>
        </ProcessContainer>
    )
}

export default Process;