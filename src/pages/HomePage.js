import Header from '../components/Header1';
import Hero from '../components/Hero';
import Main from '../components/Main';
import Click from '../components/Click';
import Partner from '../components/Partner';
import Coursel from '../components/coursel';
import Articlecoursel from '../components/Articlecoursel';

const extraHeaderComponent = <Header />;
function Home(){
    return(
        <>
            {/* {extraHeaderComponent} */}
            <div className="App">
                <Hero />
                <Main />
                <Click />
                <Partner />
                <Coursel />
                <Articlecoursel />
            </div>
        </>    
    );
}

Home.extraHeaderComponent = extraHeaderComponent;
export default Home;