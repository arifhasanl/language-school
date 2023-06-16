
import useMenu from '../../Hooks/UseMenu/UseMenu';
import Banner from './banner';
import Class from './Class';
import Instructore from './Instructore';

const Home = () => {
    const [data]=useMenu();
    console.log('object',data);
    return (
        <div>
            <Banner></Banner>
            <Class></Class>
            <Instructore></Instructore>
        </div>
    );
};

export default Home;