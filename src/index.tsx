
import {createRoot} from 'react-dom/client';
import UserSearch from './classes/UserSearch';
const el = document.getElementById('root');


const users = [

    {
        name: 'Sarah', age: 20
    },
    {
        name: 'Alex', age: 23,

    },
    {

        name: 'Michael', age: 24
    }

]


const App = () =>{
    return<div>
    <h1>Hi There !</h1>
    <UserSearch users={users} />
     
    </div>
};



const root = createRoot(el!);

root.render(<App />);