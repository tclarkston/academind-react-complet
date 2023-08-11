import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
  const [enteredUserName, setUserName] = useState('');
  const [enteredAge, setAge] = useState('');
  const [error, setError] = useState('');
  
  const addUserHandler = event => {
    event.preventDefault();

    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age.'
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid age > 0.'
      });
      return;
    }

    props.onAddUser(enteredUserName, enteredAge);
    setUserName('');
    setAge('');
  };

  const userNameChangeHandler = event => {
    setUserName(event.target.value);
  }

  const ageChangeHandler = event => {
    setAge(event.target.value);
  }

  const clearErrorHandler = event => {
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={clearErrorHandler} /> }
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input id='username' type='text' value={enteredUserName} onChange={userNameChangeHandler} />
          <label htmlFor='age'>Age (Years)</label>
          <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  )
};

export default AddUser;