module.exports = (fn, logMessage) => {
  return (req, res, next) => {
    fn(req, res, next).catch((error) => {
      console.log(logMessage);
      console.log(error);
      next(error);
      res.status(error.statusCode).json({ errorMessage: error.message });
    });
  };
};
