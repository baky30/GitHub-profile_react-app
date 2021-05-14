import axios from 'axios';
import { useState } from 'react';
import './App.scss';
import Preloader from './common/Preloader';
import MainLayout from './components/MainLayout';
import ProfileContainer from './components/ProfileContainer';
import StartingPage from './components/StartingPage';

function App() {
    const [userProfile, setUserProfile] = useState(null)
    const [userRepos, setUserRepos] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isStarting, setStarting] = useState(true)

    const fetchData = async (username) => {
        setStarting(false)
        setIsLoading(true)

        axios.get(`https://api.github.com/users/${username}`)
            .then ((res) => {
                setUserProfile(res.data)

                axios.get(`https://api.github.com/users/${username}/repos`)
                .then((res) => {
                    setUserRepos(res.data)
                    setIsLoading(false)
                })
            })
            .catch (() => {
                setUserProfile(null)
                setUserRepos(null)
                setIsLoading(false)
            })


    }
    
    const setUsername = (username) => {
        username && fetchData(username);
    }

    return (
        <MainLayout setUsername={setUsername} >
            {  isStarting
                ?    <StartingPage />
                :   <>
                        {isLoading 
                            ?  <Preloader />  
                            :  <ProfileContainer userProfile={userProfile} repos={userRepos} /> 
                        }
                    </>
            }
        </MainLayout>
    );
}

export default App;
