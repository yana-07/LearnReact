import Card from "../UI/Card";
import classes from './UsersList.module.css'

const UsersList = (props) => {
    const userElements = props.users.map(user => <li key={user.id}>{user.username} ({user.age} years old)</li>);

    return (
        <Card className={classes.users}>
            <ul>
                {userElements}
            </ul>
        </Card>
    );
};

export default UsersList;