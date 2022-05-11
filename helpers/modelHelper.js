const appErrorHandle = require('../service/appErrorHandle');

module.exports = {
  checkRequiredField(data, requiredFields = [], next) {
    requiredFields.foreach((field) => {
      if (data && !data.field) {
        next(appErrorHandle(400, `${field} is required`), next);
      }
    });
  },
};
