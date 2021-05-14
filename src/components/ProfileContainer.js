import React from 'react'
import ProfileContent from './ProfileContent'
import ReposList from './ReposList'
import NoUser from './NoUser'

export default function ProfileContainer({ userProfile, repos }) {
    return (
        <>
            {userProfile ? <>
                                <ProfileContent userProfile={userProfile} />
                                <ReposList repos={repos} />
                            </>
                        : <NoUser />
            }
        </>
    )
}
