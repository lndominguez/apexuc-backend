import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import bcrypt from 'bcrypt';



async function register(req, res) {

    const { firstName, lastName, email, password } = req.body

    try {

        const userFound = await User.findOne({ email })

        if (userFound) return res.status(400).json(['This email has been taken'])

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword
        })

        const userSaved = await newUser.save()


        return res.json({
            accessToken: token, user: {
                id: userSaved._id,
                firstName: userSaved.firstName,
                lastName: userSaved.lastName,
                email: userSaved.email,
                createAt: userSaved.createdAt,
                updateAt: userSaved.updatedAt
            }
        })


    } catch (error) {

        return res.status(500).json({ message: error.message })
    }
}


async function login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ email }, 'secreto', { expiresIn: '1h' });
        return res.json({
            accessToken: token, user: {
                id: user._id,
                email: user.email,
                createAt: user.createdAt,
                updateAt: user.updatedAt
            }
        })
    } else {
        return res.status(401).json({ message: 'Credenciales inválidas' });
    }
}

export { register, login };
