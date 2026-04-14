import React from 'react';
import { useParams } from 'react-router';
import useFriends from '../../hooks/useFriends';
import { FadeLoader } from 'react-spinners';

const FriendDetails = () => {
    const { id } = useParams();
    //  console.log(id);
    const { friends, loading } = useFriends();
    // console.log(friends ,loading)
    const expectedFriend = friends.find((friend) => friend.id == id)
    console.log(expectedFriend)




    if (loading) {
        return <div className='flex justify-center items-center h-[60vh]'>
            <FadeLoader />
        </div>
    }


    return (
        <div>

            <h1>{expectedFriend.name}</h1>
            <h1>{expectedFriend.email}</h1>
        </div>
    );
};

export default FriendDetails;