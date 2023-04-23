import {useState} from 'react'

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css'

const AddUser = (props) => {
    const [userInput, setUserInput] = useState({username: '', age: ''});
    const [error, setError] = useState(); // initial state = undefined

    const addUserHandler = (event) => {
        event.preventDefault();
        if (userInput.username.trim().length === 0 || userInput.age.trim().length === 0) {
            setError({
                title: "Invalid input!",
                message: "Username and age must be at least 1 character long."
            });
            return;
        }
        if (+userInput.age < 1) {
            setError({
                title: "Invalid age!",
                message: "Cannot set a negative age."
            });
            return;
        }

        props.onAddUser(userInput);
        setUserInput({username: '', age: ''});
    };

    const userInputChangeHandler = (event) => {
        setUserInput(prevUserInput => ({
            ...prevUserInput,
            [event.target.name]: event.target.value
        }))
    };

    const hideModalHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onHideModal={hideModalHandler} />}
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
        </div>       
    );
};

export default AddUser;