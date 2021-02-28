import Countries from '../component/Countries';
import Logo from '../component/Logo';
import Navigation from '../component/Navigation';
const Home = () => {

    return(
        <div className="home">
            <Navigation/>
            <Logo/>
            <Countries/>
        </div>
    );
};

export default Home;