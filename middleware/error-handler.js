import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (err, req, res, next) => {
  const defaultError = {
    // If there is an error type input, send it, if not, send the default error on the right
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    // If there is a message, send it, if not, send the default text on the right
    msg: err.message || 'Something went wrong, try again later',

  };
  if (err.name === 'ValidationError') {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    // defaultError.msg = err.message

    // join elements from error object. All currrent Errors will be displayed in one single string
    defaultError.msg = Object.values(err.errors).map((item) => item.message).join(',');
  }

  if (err.code && err.code === 11000) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = `${Object.keys(err.keyValue)} field has to be unique`;
  }
  res.status(defaultError.statusCode).json({ msg: defaultError.msg });
};

export default errorHandlerMiddleware;
