 export const checkValidateData=(email,password)=>{
   const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
   const isValidPassword = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/.test(password);
   if (!isValidEmail) return 'Email ID is not valid';
   if (!isValidPassword) return 'Password is not valid';
   return null;
 }