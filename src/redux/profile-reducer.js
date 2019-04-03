const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostActionCreator = (message) => ({type: CHANGE_NEW_POST, value: message });

let initialState = {posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 10},
        {id: 2, message: 'Hello. I\'m ok', likesCount: 15}
    ],
    newPost: ''};

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        default: return state; // ничего не происходит, возвращает то что пришло
        case ADD_POST: { // добавление поста в профиле
            let newPost = {
                id: 5,
                message: state.newPost, // просто заносим в новое сообщение текущий текст текстэрии
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPost = '';
            return state;
        }
        case CHANGE_NEW_POST: {
            state.newPost = action.value;
            return state;
        }
    }



    return state;
};

export default profileReducer;