import user from '../models/user.model.js';

export const signup = async (req, res) => {
    try{
          const { fullname, email, password, confirmPassword } = req.body;
    if(password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
    }
    const user = user.findone({email})
    if(user) {
        return res.status(400).json({ message: "User already exists" });
    }
    const newUser = new user({
        fullname,
        email,
        password,
        
    });
    newUser.save()
        .then(() => res.status(201).json({ message: "User registered successfully" }))
        .catch(err => res.status(500).json({ message: "Error creating user", error: err.message }));

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: " server error" });

    }
};