import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';

const AddUser = props => {
  const [enteredUserName, setUserName] = useState('');
  const [enteredAge, setAge] = useState('');
  
  const submitHandler = event => {
    event.preventDefault();

    if (enteredUserName.trim().length ===0 || enteredAge.trim().length ===0){
      return;
    }

    if (+enteredAge < 1){
      return;
    }

    setUserName('');
    setAge('');
  };

  const clickHandler = event => {
    console.log(enteredUserName, enteredAge)

  };
  
  const userNameChangeHandler = event => {
    setUserName(event.target.value);
  }

  const ageChangeHandler = event => {
    setAge(event.target.value);
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' value={enteredUserName} onChange={userNameChangeHandler} />
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler}/>
        <Button type='submit' onClick={clickHandler}>Add User</Button>
      </form>
    </Card>
  )
};

export default AddUser;