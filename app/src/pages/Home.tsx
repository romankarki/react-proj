import React, { useContext } from 'react'
import { Profile } from '../components/Profile';
import { Link } from 'react-router-dom';
import { GlobalStateContext } from '../states/appContext';

const Home: React.FC = () => {
    const [state] = useContext(GlobalStateContext);
    return (
        <>
            This is Home page.
            <Profile/>
            <Link to="/showcase">
                redirect to data
            </Link>
            <p>
                total loaded: {state?.length}
            </p>
        </>
    )
}

export default Home;