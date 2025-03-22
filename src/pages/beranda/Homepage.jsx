import HomepageMain from "../../components/HomepageMain";
import MainBanner from "../../components/MainBanner";
import Navigation from "../../components/NavigationBar";

const Homepage = () => {
    return(
        <>
            <Navigation/>
            
            <HomepageMain>
                <MainBanner
                    heroHeading="Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!"
                    heroDesc="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda."
                />
            </HomepageMain>
        </>
    )
}

export default Homepage;