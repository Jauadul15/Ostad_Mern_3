const Profile = require("../models/profileModel");

exports.CreateProfile = async (req, res) => {
    try {
        const {
            FirstName,
            LastName,
            email,
            username,
            password,
            passwordConfirm,
            mobileNumber,
            location,
        } = req.body;

        // Custom validation checks for each field
        if (!FirstName || !LastName) {
            return res.status(400).json({
                status: "fail",
                message: "First Name and Last Name are required fields.",
            });
        }

        if (!email) {
            return res.status(400).json({
                status: "fail",
                message: "Email Address is required.",
            });
        }

        if (!username) {
            return res.status(400).json({
                status: "fail",
                message: "Username is required.",
            });
        }

        if (!password) {
            return res.status(400).json({
                status: "fail",
                message: "Password is required.",
            });
        }

        if (!location) {
            return res.status(400).json({
                status: "fail",
                message: "Location is required.",
            });
        }
        // Regular expression for Bangladeshi mobile number format (e.g., +8801712345678 or 01712345678)
        const mobileNumberRegex = /^(?:\+88|01)?(?:\d{11}|\d{13})$/;

        // Validate mobile number
        if (!mobileNumberRegex.test(mobileNumber)) {
            return res.status(400).json({
                status: "fail",
                message: "Please provide a valid Bangladeshi mobile number.",
            });
        }


        // Password confirmation check
        if (password !== passwordConfirm) {
            return res.status(400).json({
                status: "fail",
                message: "Password confirmation does not match the password.",
            });
        }

        const profile = await Profile.create({
            FirstName,
            LastName,
            email,
            username,
            password,
            mobileNumber,
            location,
        });

        res.status(201).json({
            status: "Success",
            data: profile,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "error",
            message: "An error occurred while creating the profile.",
        });
    }
};
