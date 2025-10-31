import Bcard from "./card/Bcard"
import Scard from "./card/Scard"

const Works = () => {
    return (
        <section className='xl:mx-24 mx-8 pb-20'>
            <h1 className='text-3xl font-bold font-title'>My Works</h1>
            <p className='pt-3 pb-5 text-[#0000008C]'>Ill be sharing my daily article here, Feel free to find inspiration in it</p>
            <div className="flex flex-wrap">
                <Bcard src={'/images/bloomy.png'} title={'Bloomy Bangkit : Blue Economy'} desk={'In the colorful world of manhwa, there exists a character with vibrant green hair, a hue that reflects his enigmatic nature and untamed spirit. His emerald locks cascade around his face like tendrils of ivy, adding an air of mystique to his presence.'} />
                <Bcard src={'/images/enfu.png'} title={'Enfution : UNDIP Website'} desk={'In the colorful world of manhwa, there exists a character with vibrant green hair, a hue that reflects his enigmatic nature and untamed spirit. His emerald locks cascade around his face like tendrils of ivy, adding an air of mystique to his presence.'} />
                                <Bcard src={'/images/bloomy.png'} title={'Bloomy Bangkit : Blue Economy'} desk={'In the colorful world of manhwa, there exists a character with vibrant green hair, a hue that reflects his enigmatic nature and untamed spirit. His emerald locks cascade around his face like tendrils of ivy, adding an air of mystique to his presence.'} />
                <Bcard src={'/images/enfu.png'} title={'Enfution : UNDIP Website'} desk={'In the colorful world of manhwa, there exists a character with vibrant green hair, a hue that reflects his enigmatic nature and untamed spirit. His emerald locks cascade around his face like tendrils of ivy, adding an air of mystique to his presence.'} />
            </div>
            <div className="flex flex-wrap">
                <Scard src={'/images/ntg.jpg'} theme={'Company'} title={'BKPSDM kab. Purwakarta'} desk={'In the colorful world of manhwa, there exists a character with vibrant green hair, a hue that reflects his enigmatic nature and untamed spirit. His emerald locks cascade around his face like tendrils of ivy, adding an air of mystique to his presence.'} />
                <Scard src={'/images/ecanteen1.png'} theme={'Company'} title={'Flutter : Ecanteen'} desk={'In the colorful world of manhwa, there exists a character with vibrant green hair, a hue that reflects his enigmatic nature and untamed spirit. His emerald locks cascade around his face like tendrils of ivy, adding an air of mystique to his presence.'} />
                <Scard src={'/images/banner.jpg'} theme={'Company'} title={'Batch Image of Woman with'} desk={'In the colorful world of manhwa, there exists a character with vibrant green hair, a hue that reflects his enigmatic nature and untamed spirit. His emerald locks cascade around his face like tendrils of ivy, adding an air of mystique to his presence.'} />
                <Scard src={'/images/banner.jpg'} theme={'Company'} title={'Batch Image of Woman with'} desk={'In the colorful world of manhwa, there exists a character with vibrant green hair, a hue that reflects his enigmatic nature and untamed spirit. His emerald locks cascade around his face like tendrils of ivy, adding an air of mystique to his presence.'} />
            </div>
        </section>
    )
}

export default Works