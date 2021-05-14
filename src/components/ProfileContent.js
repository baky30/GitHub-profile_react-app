import React from 'react'
import {ReactComponent as SocialGroup} from '../assets/SocialGroupIcon.svg'
import {ReactComponent as UserIcon} from '../assets/UserIcon.svg'

export default function ProfileContent({ userProfile }) {
    const thousandToK = (val) => {
        if(val<1000)
            return val;
        return (val / 1000).toFixed(1)+'k';
    }

    return (
        <div className="profile-section">
            <div>
                <div className="image-wrapper">
                    <img className="profile-avatar" src={userProfile.avatar_url} alt="" />
                </div>
                <h2 className="profile-username">{userProfile.name}</h2>
                <h3>
                    <a href={userProfile.html_url} target="_blank" className="profile-link" >{userProfile.login}</a>
                </h3>
            </div>
            <div className="profile-followers">
                <div className="image-wrapper">
                    <SocialGroup />
                    <span>{thousandToK(userProfile.followers)} followers</span>
                </div>
                <div className="image-wrapper">
                    <UserIcon />
                    <span>{thousandToK(userProfile.following)} following</span>
                </div>
            </div>
        </div>
    )
}
