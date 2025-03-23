import { ButtonTab } from "../../components/Button";
import HomepageMain from "../../components/HomepageMain";
import MainBanner from "../../components/MainBanner";
import { MainCard, MainCardMobile } from "../../components/MainCard";
import { MainCardWrapper, MainCardWrapperMobile } from "../../components/MainCardWrapper";
import MainHeading from "../../components/MainHeading";
import MainSection from "../../components/MainSection";
import MainTab from "../../components/MainTab";
import MainTabs from "../../components/MainTabs";
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

                <MainSection>
                    <MainHeading
                       mainHeadingText="Koleksi Video Pembelajaran Unggulan"
                       mainDescText="Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!" 
                    />

                    <MainTabs>

                        <MainTab>
                            <ButtonTab/>
                        </MainTab>

                        <MainTab>
                            <ButtonTab text="Pemasaran"/>
                        </MainTab>

                        <MainTab>
                            <ButtonTab text="Desain"/>
                        </MainTab>

                        <MainTab>
                            <ButtonTab text="Pengembangan Diri"/>
                        </MainTab>

                        <MainTab>
                            <ButtonTab text="Bisnis"/>
                        </MainTab>

                    </MainTabs>

                    <MainCardWrapper>
                        <MainCard poster="/src/assets/poster_1.png" textHeading="Big 4 Auditor Financial Analyst" textDesc="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..." tutorAvatar="/src/assets/Avatar_1.png" tutorName="Jenna Ortega" tutorRole="Senior Accountant" tutorCompany="Gojek"/>
                        <MainCard poster="/src/assets/poster_2.png" textHeading="Big 4 Auditor Financial Analyst" textDesc="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..." tutorAvatar="/src/assets/Avatar_2.png" tutorName="Jenna Ortega" tutorRole="Senior Accountant" tutorCompany="Gojek"/>
                        <MainCard poster="/src/assets/poster_3.png" textHeading="Big 4 Auditor Financial Analyst" textDesc="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..." tutorAvatar="/src/assets/Avatar_3.png" tutorName="Jenna Ortega" tutorRole="Senior Accountant" tutorCompany="Gojek"/>
                    </MainCardWrapper>

                    <MainCardWrapper>
                        <MainCard poster="/src/assets/poster_4.png" textHeading="Big 4 Auditor Financial Analyst" textDesc="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..." tutorAvatar="/src/assets/Avatar_4.png" tutorName="Jenna Ortega" tutorRole="Senior Accountant" tutorCompany="Gojek"/>
                        <MainCard poster="/src/assets/poster_5.png" textHeading="Big 4 Auditor Financial Analyst" textDesc="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..." tutorAvatar="/src/assets/Avatar_5.png" tutorName="Jenna Ortega" tutorRole="Senior Accountant" tutorCompany="Gojek"/>
                        <MainCard poster="/src/assets/poster_6.png" textHeading="Big 4 Auditor Financial Analyst" textDesc="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..." tutorAvatar="/src/assets/Avatar_6.png" tutorName="Jenna Ortega" tutorRole="Senior Accountant" tutorCompany="Gojek"/>
                    </MainCardWrapper>

                    <MainCardWrapper>
                        <MainCard poster="/src/assets/poster_7.png" textHeading="Big 4 Auditor Financial Analyst" textDesc="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..." tutorAvatar="/src/assets/Avatar_7.png" tutorName="Jenna Ortega" tutorRole="Senior Accountant" tutorCompany="Gojek"/>
                        <MainCard poster="/src/assets/poster_8.png" textHeading="Big 4 Auditor Financial Analyst" textDesc="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..." tutorAvatar="/src/assets/Avatar_8.png" tutorName="Jenna Ortega" tutorRole="Senior Accountant" tutorCompany="Gojek"/>
                        <MainCard poster="/src/assets/poster_9.png" textHeading="Big 4 Auditor Financial Analyst" textDesc="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..." tutorAvatar="/src/assets/Avatar_9.png" tutorName="Jenna Ortega" tutorRole="Senior Accountant" tutorCompany="Gojek"/>
                    </MainCardWrapper>

                    <MainCardWrapperMobile>
                        <MainCardMobile posterMobile="/src/assets/poster_mobile_1.png" textHeadingMobile="Big 4 Auditor Financial Analyst" tutorAvatarMobile="/src/assets/Avatar_1.png" tutorNameMobile="Jenna Ortega" tutorRoleMobile="Senior Accountant"/>
                    </MainCardWrapperMobile>



                </MainSection>
            </HomepageMain>
        </>
    )
}

export default Homepage;