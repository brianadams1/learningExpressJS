// POST METHOD  LOGIN

const login = (req, res) => {
  res.cookie("token", "askdjbajfdlajsda");
  res.cookie("username", "troll1234");
  res.cookie("location", "Jakarta");

  res.status(200).json({
    message: "Logged in",
  });
};

// DELETE METHOD LOGOUT

const logout = (req, res) => {
  res.clearCookie("token");
  res.clearCookie("username");
  res.clearCookie("location");

  res.status(200).json({
    message: "Cookies cleared",
  });
};

export default { login, logout };