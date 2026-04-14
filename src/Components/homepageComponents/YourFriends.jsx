import React, {   } from 'react';
import FriendsCard from '../Ui/FriendsCard';
import { FadeLoader } from 'react-spinners';
import useFriends from '../../hooks/useFriends';

const YourFriends = () => {

    const {friends, loading} = useFriends();

    // const [friends, setFriends] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch("/data.json");
    //         const data = await res.json();
    //         console.log(data)
    //         setFriends(data);


    //         setTimeout(() => {
    //             setFriends(data);
    //             setLoading(false)
    //         }, 1000);
    //     };

    //     fetchData();
    // }, []);


    return (
        <div className='bg-[#F8FAFC]'>
            <div className='max-w-7xl mx-auto'>
                <p className='text-2xl  font-semibold pt-5 lg:pt-16 md:pb-2 px-4'>Your Friends</p>

                {loading? <div className='flex justify-center h-90 pt-30'><FadeLoader /></div> :


                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  lg:gap-4 lg:pb-10 '>

                    {friends.map((friend, index) => {
                        return <FriendsCard friend={friend} key={index}/>
                    })}

                </div>}






            </div>
        </div>
    );
};

export default YourFriends;