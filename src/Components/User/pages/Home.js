import { useHistory } from 'react-router-dom';
import MainLayout from '../MainLayout';
import Banner from '../components/Banner/Banner';
import GamesSection from '../components/GamesSection/GamesSection';
import UpcomingGamesSection from '../components/UpcomingGamesSection/UpcomingGames';
import LoadingSpinner from '../../sharedComponents(user+admin)/UI/LoadingSpinner/LoadingSpinner'
import useFetchData from '../../Admin/customHooks/useFetchData';

const Home = () => {
    const { state } = useFetchData();
    const {
        data: gamesList,
        loading,
    } = state;

    const history = useHistory();
    const handleCheckOut = (id) => {
        history.push(`/checkout/${id}`);
    }

    if (loading) return <LoadingSpinner />;
    return (
        <>
            <MainLayout>
                <Banner />
                {
                    gamesList &&
                    <GamesSection handleCheckOut={handleCheckOut} gamesList={gamesList} />
                }
                <UpcomingGamesSection />
            </MainLayout>
        </>
    );
};

export default Home;