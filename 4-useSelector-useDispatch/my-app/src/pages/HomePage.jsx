import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewHobby, setActiveHobby } from "../actions/hobby";
import HobbyList from '../components/Home/HobbyList';

const randomNumber = () => (
    1000 + Math.trunc((Math.random() * 900))
)

function HomePage(props) {

    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);

    const dispatch = useDispatch();
    const handleAddHobbyList = () => {
        //random a hobby object : id + title 
        const newId = randomNumber();
        const newHobby = {
            id: newId,
            title: `Hobby ${newId}`
        }

        //Dispatch action to add a new hobby to redux 
        const action = addNewHobby(newHobby);
        dispatch(action);
    }

    const handleHobbyClick = (hobby) => {
        //Dispatch action to add a new hobby to redux 
        const action = setActiveHobby(hobby);
        dispatch(action);
    }



    return (
        <div className="home-page">
            <h1>REDUX HOOKS - HomePage</h1>
            <button onClick={handleAddHobbyList}>Random Hobby</button>
            <HobbyList
                hobbyList={hobbyList}
                activeId={activeId}
                onHobbyClick={handleHobbyClick}
            />
        </div>
    )
}
export default HomePage