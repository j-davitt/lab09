'use strict';

module.exports = (capability) => {
  return (req, res, next) => {
    try {
      if(req.user.cabalities.includes(capability)) {
        next();
      } else {
        next('Not Authorized');
      }
    } catch(err) {
      next('Invalid Login Error at ACL');
    }
  };
};

