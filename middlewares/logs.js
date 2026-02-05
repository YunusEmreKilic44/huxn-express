const userCredential = (req, res, next) => {
  console.log("username (alex)");
  console.log("Email: (alex21@gmail.com)");
  console.log("password: (alex222333)");
  console.log("age: (18)");
  next();
};

export default userCredential;
