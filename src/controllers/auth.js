const User = require("../models/User");
const asyncHandler = require("../middlewares/asyncHandler");

exports.signup = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.create({ username, password });
  const token = user.getJwtToken();

  res.status(201).json({ 
    success: true, 
    token 
  });
});

exports.login = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next({
      message: "Provide email and password",
      statusCode: 400,
    });
  }

  const user = await User.findOne({ username });

  if (!user) {
    return next({
      message: "Email is not yet registered to an account",
      statusCode: 400,
    });
  }

  const match = await user.checkPassword(password);

  if (!match) {
    return next({ 
      message: "Password does not match", 
      statusCode: 400 
    });
  }

  const token = user.getJwtToken();
  res.status(200).json({ 
    success: true, 
    token 
  });
});

exports.me = asyncHandler(async (req, res, next) => {
  const { avatar, username, fullname, email, _id, website, bio } = req.user;

  res
    .status(200)
    .json({
      success: true,
      data: { avatar, username, fullname, email, _id, website, bio },
    });
});
