import { styled } from '@mui/system';
import CheckIcon from '@mui/icons-material/Check';
import { List, ListItem, ListItemIcon } from '@mui/material';

const ProcessContainer = styled('div')(() => ({
    backgroundImage: 'url(https://forkitchen.s3.ap-northeast-1.amazonaws.com/Images/HomePageImgs/ProcessBg.jpg)',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}))

const ContentContainer = styled('div')(({theme}) => ({
    maxWidth: '1260px',
    margin: '0 auto',
    padding: '40px 0',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    '>h2': {
        fontFamily: "'Oswald', sans-serif",
        fontSize: '32px',
        textTransform: 'uppercase',
        color: '#fff',
        padding: '0 0 10px 0',
        margin: 0,
        fontWeight: 500,
        lineHeight: '32px',
    },
    [theme.breakpoints.down('lg')]: {
        '>h2': {
            fontSize: '24px',
            lineHeight: '24px',
        }
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