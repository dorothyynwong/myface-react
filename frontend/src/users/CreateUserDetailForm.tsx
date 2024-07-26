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
    const [msgState, setMsgState] = useState<string>('');
  
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
            postData.append('coverImageUrl', formState.coverImageUrl);            
            postData.append('profileImageUrl', formState.profileImageUrl);
        
            // console.log('postData :',postData)
            const postUrl = "http://localhost:3001/users/create"
            fetch(postUrl, {
              method: 'post',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({  name: formState.name,
                username: formState.username,
                email: formState.email,
                coverImageUrl: formState.profileImageUrl,
                profileImageUrl: formState.coverImageUrl,}),
            })
              .then((response) => {
                if(response.status === 200) {
                  setMsgState(`User ${formState.username} is created successfully`);
                  setFormState({ name: '', username: "", email: "",
                    profileImageUrl: "",
                    coverImageUrl: ""});
                }
              }
            )
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
      <div>{msgState}</div>
        <input
        type="text"
        name="name"
        value={formState.name}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
      <input
        type="text"
        name="username"
        value={formState.username}
        onChange={handleInputChange}
        required 
        pattern="[a-z]{2,8}" 
        title="should be lowercase length 2-8 chars"
        placeholder="Enter your user name"
      />
    <input
        type="email"
        name="email"
        value={formState.email}
        onChange={handleInputChange}
        required
        placeholder="Enter your email"
      />
        <input
        type="url"
        name="profileImageUrl"
        value={formState.profileImageUrl}
        onChange={handleInputChange}
        required
        placeholder="Enter your Profile Image URL"
      />
        <input
        type="url"
        name="coverImageUrl"
        value={formState.coverImageUrl}
        onChange={handleInputChange}
        required
        placeholder="Enter your Cover Image URL"
      />
      <button type="submit">Submit</button>
    </form>
    );
  };
