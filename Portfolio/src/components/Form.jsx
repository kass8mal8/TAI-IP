import { Button, TextField, TextareaAutosize } from "@mui/material";

export const Form = () => {
    return (  
        <form className="form">
            <TextField 
                label='Name' 
                name='name' 
                placeholder="John Doe"
                className="input" 
            />
            <TextField 
                label='Email' 
                name='email' 
                placeholder="email@example.com" 
                className="input"
            />
            <TextareaAutosize minRows={5} placeholder="Enter your message" className="input" />
            <Button type='submit'>Submit</Button>
        </form>
    );
}