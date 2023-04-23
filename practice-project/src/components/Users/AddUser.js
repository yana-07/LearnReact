import {useState} from 'react'

import Button from "../UI/Button";
import Card from "../UI/Crad";
import classes from './AddUser.module.css'

const AddUser = (props) => {
    const [userInput, setUserInput] = useState({username: '', age: ''})

    const addUserHandler = (event) => {
        event.preventDefault();
        if (userInput.username.trim().length === 0 || userInput.age.trim().length === 0) {
            return;
        }
        if (+userInput.age < 1) {
            return;
        }

        console.log(userInput);
        setUserInput({username: '', age: ''});
    };

    const userInputChangeHandler = (event) => {
        setUserInput(prevUserInput => ({
            ...prevUserInput,
            [event.target.name]: event.target.value
        }))
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input 
                    id="username" 
                    name="username" 
                    type="text" 
                    value={userInput.username} 
                    onChange={userInputChangeHandler} 
                />
                <label htmlFor="age">Age (Years)</label>
                <input 
                    id="age" 
                    name="age" 
                    type="number" 
                    value={userInput.age} 
                    onChange={userInputChangeHandler} 
                />
                <Button type="submit" onClick={addUserHandler}>Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;