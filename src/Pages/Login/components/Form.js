import React from "react";
import accounts from "../data"

function Form (){

    
    const [formData,setFormData] = React.useState(
        {email:"",password:""}
    )  

    const [formErrors,setFormErrors] = React.useState({})

    const [formIsValid,setFormIsValid] = React.useState(false)

    const [isSubmitting,setIsSubmitting] =React.useState(false)

    const [accountsData,setEmailData] = React.useState(accounts.data.accounts)

    function handleChange(event){
        const {name,value} = event.target
        setFormData(prevFormData=> {
            return{
                ...prevFormData,
                [name]:value
            }
        })
        validateField(name,value)
    }   

    function handleSubmit(event){
        event.preventDefault()
        setIsSubmitting(true);
        if(formIsValid){
            let temp = ""
            let b = true
            
            for(let i=0;i<accountsData.length;i++){
                if(accountsData[i].email === formData.email){
                    if(accountsData[i].password === formData.password){
                        console.log("Signed In Succesfuly")
                        b=false
                        break;
                    }else{
                        temp="The information you entered does not match our records for accessing this service. You either entered an invalid email and/or password or you do not have privilege to access this service. Please try to enter your email and password again."
                    }
                }else{
                    temp = "The information you entered does not match our records for accessing this service. You either entered an invalid email and/or password or you do not have privilege to access this service. Please try to enter your email and password again."
                }
            }
            if(b){
                console.log(temp)
            }

        }
    }

    const validateField = (name,value) =>{
        let errors = {...formErrors}
        switch (name){
            case "email":
                errors.email=
                !value || !/\S+@\S+\.\S+/.test(value)
                ? "Please enter a valid email address"
                :"";
                break;
            case "password":
                errors.password =
                !value || value.length < 6 
                ? "Password must be at least 6 characters long"
                : "";
                break;

            default:
                break;    
        }
        setFormErrors(errors);
        setFormIsValid(Object.values(errors).every((err) => err === ''));
    }

    

    return(
        <div className="form-wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="form-input">
                            <input 
                                    type="text" 
                                    name="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required="required"
                            />
                            <label htmlFor="email">Email </label>
                            {isSubmitting && formErrors.email && <div className="error err-email">{formErrors.email}</div>}
                        </div>
                        <div className="form-input">
                            <input 
                                    type="password" 
                                    name="password" 
                                    value={formData.password}
                                    onChange={handleChange}
                                    required="required"
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                        {isSubmitting && formErrors.password && <div className="error err-pass">{formErrors.password}</div>}
                        <button type="">SIGN IN</button>
                    </form>
                </div>
    )
}


export default Form ;