import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';

const AddUser = props => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  
  const submitHandler = event => {
    event.preventDefault();

  };

  const clickHandler = event => {
    console.log(userName, age)

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
        <input id='username' type='text' onChange={userNameChangeHandler} />
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type='number' onChange={ageChangeHandler}/>
        <Button type='submit' onClick={clickHandler}>Add User</Button>
      </form>
    </Card>
  )
};

export default AddUser;