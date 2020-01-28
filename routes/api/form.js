const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

//User model
const Form = require("../../models/Form");

//@route POST api/form
//@desc  Register new form
//@access public

router.post("/", (req, res) => {
  const { firstname, lastname, email, password, farmproduce, amount } = req.body;
  console.log(req.form);
  //validation
  if(!firstname || !lastname ||!email || !password || !farmproduce) {
    return res.status(400).json({ msg: "Please enter all fields" });
  };

  if (amount < 50,000) {
    return res.status(400).json({msg: "Minimum Investment amount is 50,000"})
  };
  // //check existing formuser

  Form.findOne({ email })
  .then(form => {
    if (form) return res.status(400).json({ msg: "Investment details already registered" });

    const newForm = new Form({
      firstname,
      lastname,
      email,
      password,
      farmproduce,
      amount
    });

    //create salt and harsh pasword
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newForm.password, salt, (err, hash) => {
        if (err) throw err;
        newForm.password = hash;
        newForm.save().then(form => {
          jwt.sign(
            { id: form.id },
            config.get("jwtSecret"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                form: {
                  id: form.id,
                  firstname: form.firstname,
                  lastname: form.lastname,
                  email: form.email,
                  password: form.password,
                  farmproduce: form.farmproduce,
                  amount: form.amount
                }
              });
            }
          );
        });
      });
    });
  });
});

module.exports = router;
