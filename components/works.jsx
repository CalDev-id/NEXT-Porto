import Bcard from "./card/Bcard"
import Scard from "./card/Scard"

const Works = () => {
    return (
        <section className='xl:mx-24 mx-8'>
            <h1 className='text-3xl font-bold font-title'>My Works</h1>
            <p className='pt-3 pb-5 text-[#0000008C]'>Ill be sharing my daily article here, Feel free to find inspiration in it</p>
            <div className="flex flex-wrap">
                <Bcard src={'/images/anime.png'} title={'Batch Image of Woman with Black Hair'} desk={'In the colorful world of manhwa, there exists a character with vibrant green hair, a hue that reflects his enigmatic nature and untamed spirit. His emerald locks cascade around his face like tendrils of ivy, adding an air of mystique to his presence.'} />
                <Bcard src={'/images/banner.jpg'} title={'Batch Image of Woman with Majestic Blue Eyes and Hair'} desk={'In the colorful world of manhwa, there exists a character with vibrant green hair, a hue that reflects his enigmatic nature and untamed spirit. His emerald locks cascade around his face like tendrils of ivy, adding an air of mystique to his presence.'} />
            </div>
            <div className="flex flex-wrap">
                <Scard src={'/images/anime.png'} title={'Batch Image of Woman with Black Hair'} desk={'In the colorful world of manhwa, there exists a character with vibrant green hair, a hue that reflects his enigmatic nature and untamed spirit. His emerald locks cascade around his face like tendrils of ivy, adding an air of mystique to his presence.'} />
                <Scard src={'/images/banner.jpg'} title={'Batch Image of Woman with Majestic Blue Eyes and Hair'} desk={'In the colorful world of manhwa, there exists a character with vibrant green hair, a hue that reflects his enigmatic nature and untamed spirit. His emerald locks cascade around his face like tendrils of ivy, adding an air of mystique to his presence.'} />
                <Scard src={'/images/banner.jpg'} title={'Batch Image of Woman with Majestic Blue Eyes and Hair'} desk={'In the colorful world of manhwa, there exists a character with vibrant green hair, a hue that reflects his enigmatic nature and untamed spirit. His emerald locks cascade around his face like tendrils of ivy, adding an air of mystique to his presence.'} />
                <Scard src={'/images/banner.jpg'} title={'Batch Image of Woman with Majestic Blue Eyes and Hair'} desk={'In the colorful world of manhwa, there exists a character with vibrant green hair, a hue that reflects his enigmatic nature and untamed spirit. His emerald locks cascade around his face like tendrils of ivy, adding an air of mystique to his presence.'} />
            </div>
        </section>
    )
}

export default Works