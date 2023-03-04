const userData = require("../models/userModel");

module.exports.createUser = async (req, res) => {
  
  try {    
    const { name, city, state, pincode, gender, dob } = req.body;
    if (!name || !city || !state || !pincode || !dob || !gender) {
      return res.status(200).json("Fields cannot be empty");
    }
    if (isNaN(pincode)) return res.status(200).json("Invalid Pincode");
    
    const user = new userData({ name, city, state, pincode, dob, gender });
    await user.save();
    res.status(200).json("Successfully created");
  } catch (err) {
    
    res.status(500).json("Internal Server Error");
  }
};

module.exports.getUsers = async (req, res) => {
  try {
    const users = await userData.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json("Internal Server Error" );
  }
};

module.exports.editUser = async (req, res) => {
  const {id} = req.params;
  
  const { name, city, state, pincode, gender, dob } = req.body;
  if (!name || !city || !state || !pincode || !dob || !gender) {
    return res.status(200).json("Fields cannot be empty");
  }
  if (isNaN(pincode)) return res.status(200).json("Invalid Pincode");
  try {
    await userData.findByIdAndUpdate(id, {
      name,
      city,
      state,
      pincode,
      gender,
      dob,
    });
    res.status(200).json("succesfully updated");
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};


module.exports.deleteUser = async (req, res) => {
  const {id} = req.params;
  try {
    await userData.findByIdAndDelete(id);
    res.status(200).json("succesfully deleted");
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};