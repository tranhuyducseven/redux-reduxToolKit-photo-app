console.log(window.Redux)
const { createStore } = window.Redux;


//init state
//reducer 
//store 

const initialState = JSON.parse(localStorage.getItem('hobby-list')) || [];

const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_HOBBY": {
            const newList = [...state];
            newList.push(action.payload);
            return newList;
        }
        default:
            return state;

    }

}

const store = createStore(hobbyReducer);

//----------------------------------------------------------------


// RENDER REDUX HOBBY LIST

const renderHobbyList = (hobbyList) => {
    if (!Array.isArray(hobbyList) || hobbyList.length === 0) return;

    const ulElement = document.querySelector('#hobbyListId');
    if (!ulElement) return;

    //reset previous content of ul 
    ulElement.innerHTML = '';

    hobbyList.map((hobby) => {
        const liElement = document.createElement('li');
        liElement.innerHTML = hobby;
        ulElement.appendChild(liElement);
    })
}

//RENDER INITIAL HOBBY LIST 
const initialHobbyList = store.getState();
console.log(initialHobbyList);
renderHobbyList(initialHobbyList)


//HANDLE FORM SUBMIT 
const hobbyFormElement = document.querySelector('#hobbyForm');
if (hobbyFormElement) {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const hobbyTextElement = document.querySelector('#hobbyText');
        if (!hobbyTextElement) return;
        const action = {
            type: 'ADD_HOBBY',
            payload: hobbyTextElement.value
        };
        store.dispatch(action)
        hobbyFormElement.reset();
    }
    hobbyFormElement.addEventListener('submit', handleFormSubmit);
}

store.subscribe(() => {
    const newHobbyList = store.getState();
    renderHobbyList(newHobbyList);
    localStorage.setItem('hobby-list', JSON.stringify(newHobbyList));
})