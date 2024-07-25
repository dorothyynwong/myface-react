import React, { useState } from 'react';

interface CreateUserRequest {
  name: string;
  username: string;
  email: string;
  coverImageUrl: string;
  profileImageUrl: string;
}
// React.FC stands for Function Component in React and is a generic type associated with TypeScript. 
// It’s used to define the props that a function component accepts, providing type safety and making the code easier to refactor and understand.
export const CreateUserDetailForm: React.FC = () => {
    const [formState, setFormState] = useState<CreateUserRequest>({ name: '', username: "", email: "",
        profileImageUrl: "",
        coverImageUrl: ""});
  
        //React.FormEvent<HTMLFormElement> is a type that represents an event object associated with form elements. 
        // Specifically, it's an event object that's triggered when a form is submitted
        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault(); // to stop the form trying to submit normally and hence you can create your own post request to the backend API
            // Process formState here 
            // console.log('before setting ip the postData',formState.name,formState.username)
            const postData = new FormData();
            postData.append('name', formState.name);
            postData.append('username', formState.username);
            postData.append('email', formState.email);
            postData.append('profileImageUrl', formState.profileImageUrl);
            postData.append('coverImageUrl', formState.coverImageUrl);
        
            // console.log('postData :',postData)
            const postUrl = "http://localhost:3001/users/create"
            fetch(postUrl, {
              method: 'post',
              body: postData,
            })
              .then((response) => response.json())
              .then((data) => {
                // Handle the response data
                console.log('inside the data', data)
              })
              .catch((error) => {
                // Handle any errors
                console.log('there is an error', error)
              });
            console.log(formState);
          };
        
        // It is used to type the onChange event handler of an input element in React. 
        // The event object has a target property that refers to the input element, 
        // and its value can be accessed on event.target.value. 
        // The type ChangeEventHandler is for the entire function, not just the event parameter.
        const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = event.target;
            setFormState(prevState => ({
                ...prevState,
                [name]: value
              }));
          };

    return (
      
      // <form method='post' action='http://localhost:3001/users/create'> 
      <form onSubmit={handleSubmit}>

 
        <input
        type="text"
        name="name"
        value={formState.name}
        onChange={handleInputChange}
      />
      <input
        type="UserName"
        name="username"
        value={formState.username}
        onChange={handleInputChange}
      />
    <input
        type="email"
        name="email"
        value={formState.email}
        onChange={handleInputChange}
      />
        <input
        type="profileImageUrl"
        name="profileImageUrl"
        value={formState.profileImageUrl}
        onChange={handleInputChange}
      />
        <input
        type="coverImageUrl"
        name="coverImageUrl"
        value={formState.coverImageUrl}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
    );
  };
