import React from 'react';
import module from './ProfileInfo.module.css'
import Preloader from "../../../assets/Preloader";

function ProfileInfo(props) {
    if (!props.profile)
        return <Preloader/>
    return (<div>
        <div className={module.Content}>
            <img src="dragonball.png" alt="main page"/>
        </div>
        <div className={module.Profile}>
            <img src={props.profile.photos.large} alt="Avatar"/>
            <div>Name = {props.profile.fullName}</div>
            <div>Status = {props.profile.aboutMe}</div>
            <div>lookingForAJob = <span>{props.profile.lookingForAJob ? <span color="green">+</span> :
                <span color="red">Nea</span>}</span></div>
            <div>lookingForAJobDescription = {props.profile.lookingForAJobDescription}</div>
            <table>
                <tbody>
                <td> contacts : </td>
                <td>
                    {props.profile.contacts.facebook ? <div>facebook = {props.profile.contacts.facebook}</div> : null}
                    {props.profile.contacts.website ? <div>website = {props.profile.contacts.website}</div> : null}
                    {props.profile.contacts.vk ? <div>vk = {props.profile.contacts.vk}</div> : null}
                    {props.profile.contacts.twitter ? <div>twitter = {props.profile.contacts.twitter}</div> : null}
                    {props.profile.contacts.instagram ?
                        <div>instagram = {props.profile.contacts.instagram}</div> : null}
                    {props.profile.contacts.youtube ? <div>youtube = {props.profile.contacts.youtube}</div> : null}
                    {props.profile.contacts.github ? <div>github = {props.profile.contacts.github}</div> : null}
                    {props.profile.contacts.mainLink ?
                        <div>mainLink = {props.profile.contacts.mainLink}</div> : null}
                </td>
                </tbody>
            </table>
        </div>
    </div>)
}

export default ProfileInfo;