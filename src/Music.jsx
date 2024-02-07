
import React, { useState } from 'react';
import './Music.css';

function Music() {
    const [song, setSong] = useState('');
    const [res, setRes] = useState('');
    const [size, setSize] = useState('');
    const [loading, setLoading] = useState(false); 

    const handle = async (e) => {
        e.preventDefault();
        setLoading(true); 

        const url = `https://spotify81.p.rapidapi.com/download_track?q=${song}&onlyLinks=1`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '245e539acdmshc0a405da1823177p16568djsn42f53fded573',
                'X-RapidAPI-Host': 'spotify81.p.rapidapi.com',
            },
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setRes(result[0].url);
            setSize(result[0].size);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false); 
        }
    };

    const ch = (e) => {
        setSong(e.target.value);
    };

    return (
        <>
            <div className="navbar bg-white text-black">
                <div className="navbar-center ">
                    <a className=" text-xl  ">
                       <center> <span style={{ fontSize: '24px', fontWeight: 'bold',}}>Music Stream</span></center>
                    </a>
                </div>
            </div>
            <form className="con" onSubmit={handle}>
                <div className="input-container">
                    <input placeholder="Search Songs Here" type="text" value={song} onChange={ch} />
                    <button type="submit" className="button" style={{ backgroundColor: 'yellow', color: 'blue' }}>
                        Search
                    </button>
                </div>
            </form>

            {loading ? (
                <div aria-live="assertive" role="alert" className="loader"></div>
            ) : (
                res && (
                    <div className="au">
                        <div>
                            <div className="music-player">
                                <div className="album-cover"></div>
                            </div>
                            <h3>Size : {size} </h3>
                            <audio controls>
                                <source src={res} type="audio/mpeg" />
                                Your browser does not support the element.
                            </audio>
                        </div>
                    </div>
                )
            )}
        </>
    );
}

export default Music;
