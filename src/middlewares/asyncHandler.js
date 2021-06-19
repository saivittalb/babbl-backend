const asyncHandler = (fnc) => (req, res, next) =>
  Promise.resolve(fnc(req, res, next)).catch(next);

module.exports = asyncHandler;
