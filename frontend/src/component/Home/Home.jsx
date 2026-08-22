import Hero from "../../pages/Hero/Hero";
import CoreFeatures from "../../pages/Home/CoreFeatures";
import HowDecisionLabWorks from "../../pages/Home/HowDecisionLabWorks";
import WhyDecisionLab from "../../pages/Home/WhyDecisionLab";


const Home = () => {
    return (
        <div>
            <section> 
                <Hero></Hero>
            </section>
            <section> 
                <HowDecisionLabWorks></HowDecisionLabWorks>
            </section>
            <section> 
                <WhyDecisionLab></WhyDecisionLab>
            </section>
            <section> 
                <CoreFeatures></CoreFeatures>
            </section>
        </div>
    );
};

export default Home;