import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const ProfileList = () => {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        getProfiles();
    }, []);

    const getProfiles = async () => {
        let result = await fetch('http://localhost:5000/profiles', {
            headers: {
                authorization: JSON.parse(localStorage.getItem('token'))
            }
        });
        result = await result.json();
        setProfiles(result);
    }

    // const deleteProfile = async (id) => {
    //     console.warn(id)
    //     let result = await fetch(`http://localhost:5000/profile/${id}`, {
    //         // method: "Delete"
    //     });
    //     result = await result.json();
    //     if (result) {
    //         getProfiles();
    //     }
    // }

    const searchHandle = async (event) => {
        let key = event.target.value;
        if (key) {
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json()
            if (result) {
                setProfiles(result)
            }
        } else {
            getProfiles();
        }

    }

    return (
        <div className="product-list">
            <h3>Profile List</h3>
            <input type="" className='search-product-box' placeholder='Search Profile'
                onChange={searchHandle}
            />
            <ul>
                <li>Sr. No.</li>
                <li>Name</li>
                <li>Education</li>
                <li>Skill</li>
                <li>Experience(In years)</li>
                <li>Project field</li>
                <li>Certification</li>
                <li>Expected salary</li>
                <li>Operation</li>

            </ul>
            {
                profiles.length > 0 ? profiles.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.edu}</li>
                        <li>{item.skill}</li>
                        <li>{item.exp}</li>
                        <li>{item.proj}</li>
                        <li>{item.cert}</li>
                        <li>{item.sal}</li>
                        <li>
                            <Link to={"/update/" + item._id} >Update </Link>
                        </li>

                    </ul>
                )
                    : <h1>No Result Found</h1>
            }

            <div className="footer">
                <h3>E-job Dashboard</h3>
            </div>
        </div>
    )
}

export default ProfileList;