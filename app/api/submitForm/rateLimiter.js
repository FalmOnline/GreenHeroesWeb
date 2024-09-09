import rateLimit from 'express-rate-limit';

const getIP = (req) => {
  const xForwardedFor = req.headers['x-forwarded-for'];
  if (xForwardedFor) {
    return xForwardedFor.split(',')[0].trim();
  }
  const remoteAddress = req.connection?.remoteAddress || req.socket?.remoteAddress;
  if (remoteAddress) {
    return remoteAddress;
  }
  return 'unknown';
};

const customRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later.',
  keyGenerator: (req) => getIP(req),
});

export default function rateLimiter(req, res, next) {
  const enhancedRes = {
    ...res,
    setHeader: (name, value) => {
      res.headers[name] = value;
    },
    getHeader: (name) => res.headers[name],
  };
  customRateLimit(req, enhancedRes, next);
}
