import '../../Style/App.css';
import Nav from './NavigationBar';
import React, {useState, useEffect} from 'react';
import ExaminationBoard from './UserPosts/PostExaminationBoard';



function Examboard() {
    useEffect(() => {
        fetchItems();
      //  fetchItemsDownload();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'https://localhost:50111/api/examboard'
        );
        const items = await data.json();
        setItems(items);
    };
/*
    const fetchItemsDownload = async () => {
        const data = await fetch(
            'https://localhost:50111/api/examboard/download'
        );
        const items = await data.json();
        setItems(items);
    };*/

    return (
        <div>
            <Nav />
            <br />
            <ExaminationBoard data={items} />
        </div>
    );
}

export default Examboard;