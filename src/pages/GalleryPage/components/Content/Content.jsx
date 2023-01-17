import { styled } from "@mui/system";
import GalleryPageImg01 from '../../../../assets/Images/GalleryPageImgs/GalleryPageImg01.jpeg';
import GalleryPageImg02 from '../../../../assets/Images/GalleryPageImgs/GalleryPageImg02.jpeg';
import GalleryPageImg03 from '../../../../assets/Images/GalleryPageImgs/GalleryPageImg03.jpg';
import GalleryPageImg04 from '../../../../assets/Images/GalleryPageImgs/GalleryPageImg04.jpeg';
import GalleryPageImg05 from '../../../../assets/Images/GalleryPageImgs/GalleryPageImg05.jpg';
import GalleryPageImg06 from '../../../../assets/Images/GalleryPageImgs/GalleryPageImg06.jpg';
import GalleryPageImg07 from '../../../../assets/Images/GalleryPageImgs/GalleryPageImg07.jpg';
import GalleryPageImg08 from '../../../../assets/Images/GalleryPageImgs/GalleryPageImg08.jpeg';
import GalleryPageImg09 from '../../../../assets/Images/GalleryPageImgs/GalleryPageImg09.jpg';
import GalleryPageImg10 from '../../../../assets/Images/GalleryPageImgs/GalleryPageImg10.jpg';
import GalleryPageImg11 from '../../../../assets/Images/GalleryPageImgs/GalleryPageImg11.jpg';
import GalleryPageImg12 from '../../../../assets/Images/GalleryPageImgs/GalleryPageImg12.jpg';

const ContentContainer = styled('div')(() => ({
    padding: '5vw 0',
    margin: '0 auto',
    width: '1260px',
}))

const GalleryList = styled('ul')(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    margin: 0,
    padding: 0,
}))

const GalleryListItem = styled('li')(() => ({
    width: '32%',
    margin: '0 0 40px',
    cursor: 'pointer',
    listStyle: 'none',
    '>img': {
        width: '100%',
        height: '300px',
        display: 'block',
        objectFit: 'cover',
    }
}))

const galleryImgs = [
    {id: 1, img: GalleryPageImg01},
    {id: 2, img: GalleryPageImg02},
    {id: 3, img: GalleryPageImg03},
    {id: 4, img: GalleryPageImg04},
    {id: 5, img: GalleryPageImg05},
    {id: 6, img: GalleryPageImg06},
    {id: 7, img: GalleryPageImg07},
    {id: 8, img: GalleryPageImg08},
    {id: 9, img: GalleryPageImg09},
    {id: 10, img: GalleryPageImg10},
    {id: 11, img: GalleryPageImg11},
    {id: 12, img: GalleryPageImg12},
]

const Content = () => {
    return (
        <ContentContainer>
            <GalleryList>
                {galleryImgs.map((galleryImg) => (
                    <GalleryListItem key={galleryImg.id}>
                        <img src={`${galleryImg.img}`} alt="kitchen display"  />
                    </GalleryListItem>
                ))}
            </GalleryList>
        </ContentContainer>
    )
}

export default Content;