import { styled } from "@mui/system";

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
    {id: 1, img: 'https://forkitchen.s3.ap-northeast-1.amazonaws.com/Images/GalleryPageImgs/GalleryPageImg01.jpeg'},
    {id: 2, img: 'https://forkitchen.s3.ap-northeast-1.amazonaws.com/Images/GalleryPageImgs/GalleryPageImg02.jpeg'},
    {id: 3, img: 'https://forkitchen.s3.ap-northeast-1.amazonaws.com/Images/GalleryPageImgs/GalleryPageImg03.jpg'},
    {id: 4, img: 'https://forkitchen.s3.ap-northeast-1.amazonaws.com/Images/GalleryPageImgs/GalleryPageImg04.jpeg'},
    {id: 5, img: 'https://forkitchen.s3.ap-northeast-1.amazonaws.com/Images/GalleryPageImgs/GalleryPageImg05.jpg'},
    {id: 6, img: 'https://forkitchen.s3.ap-northeast-1.amazonaws.com/Images/GalleryPageImgs/GalleryPageImg06.jpg'},
    {id: 7, img: 'https://forkitchen.s3.ap-northeast-1.amazonaws.com/Images/GalleryPageImgs/GalleryPageImg07.jpg'},
    {id: 8, img: 'https://forkitchen.s3.ap-northeast-1.amazonaws.com/Images/GalleryPageImgs/GalleryPageImg08.jpeg'},
    {id: 9, img: 'https://forkitchen.s3.ap-northeast-1.amazonaws.com/Images/GalleryPageImgs/GalleryPageImg09.jpg'},
    {id: 10, img: 'https://forkitchen.s3.ap-northeast-1.amazonaws.com/Images/GalleryPageImgs/GalleryPageImg10.jpg'},
    {id: 11, img: 'https://forkitchen.s3.ap-northeast-1.amazonaws.com/Images/GalleryPageImgs/GalleryPageImg11.jpg'},
    {id: 12, img: 'https://forkitchen.s3.ap-northeast-1.amazonaws.com/Images/GalleryPageImgs/GalleryPageImg12.jpg'},
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