const formdata = [
    {
        name:"login",
        heading:"Welcome.",
        link:"signup",
        button:"Login",
        text:"Don't have an account? Sign Up",
        inputs : [{type:"email",placeholder:"Email Address", id:1},
        {type:"password",
        placeholder:"Password", id:2}]
    },
    {
        name:"signup",
        heading:"Join us at E-cell.",
        link:"login",
        button:"Sign Up",
        text:"Already have an account? Log in",
        inputs : [{type:"text", placeholder:"Name", id:1},
        {type:"email",placeholder:"Email Address", id:2 },
        {type:"password",placeholder:"Password", id:3},
        {type:"text", placeholder:"College Name", id:4}]
    }
];
export default formdata;