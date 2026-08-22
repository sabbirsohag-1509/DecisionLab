import Hero from "../../pages/Hero/Hero";
import HowDecisionLabWorks from "../../pages/Home/HowDecisionLabWorks";


const Home = () => {
    return (
        <div>
            <section> 
                <Hero></Hero>
            </section>
            <section> 
                <HowDecisionLabWorks></HowDecisionLabWorks>
            </section>
        </div>
    );
};

export default Home;