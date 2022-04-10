import '../../Style/App.css';
import Nav from './NavigationBar';
import React, {useState, useEffect} from 'react';
import PostDoctoralDissertation from './UserPosts/PostDoctoralDissertationDefense';



function Examboard() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'https://localhost:50111/api/DissertationDefense'
        );
        const items = await data.json();
        setItems(items);
    };

    return (
        <div>
            <Nav />
            <br />
            <PostDoctoralDissertation data={items} />
        </div>
    );
}

export default Examboard;