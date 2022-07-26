const validationRulesList = [
  {
    name: "required",
    required: {
      value: true,
      message: "This field is required",
    },
  },
  {
    name: "maxLength",
    maxLength: {
      value: 20,
      message: "Input cannot exceed 20 characters",
    },
  },
  {
    name: "alphabetical",
    pattern: {
      value: /^[A-Za-z]+$/i,
      message: "Alphabetical characters only",
    },
  },
  {
    name: "numeric",
    pattern: {
      value: /^[0-9]+$/,
      message: "Please enter a number",
    },
  },
  {
    name: "passwordValidation",
    validate: {
      lessThanEight: (v) =>
        /(?=.{8,})/.test(v) || "Password must be eight characters or longer",
      haveUppercase: (v) =>
        /(?=.*[A-Z])/.test(v) ||
        "Password must contain at least 1 uppercase alphabetical character",
      haveLowercase: (v) =>
        /(?=.*[a-z])/.test(v) ||
        "Password must contain at least 1 lowercase alphabetical character",
      haveNumber: (v) =>
        /(?=.*[0-9])/.test(v) || "Password must contain at least 1 number",
      haveSpecial: (v) =>
        /(?=.*[!@#$%^&*])/.test(v) ||
        "Password must contain at least 1 special character",
    },
  },
];

export const getValidationData = (validation) => {
  let res = {};

  const filteredRules = validationRulesList.filter((item) =>
    validation.includes(item.name)
  );

  filteredRules.forEach(
    (item) => (res[Object.keys(item)[1]] = item[Object.keys(item)[1]])
  );

  return res;
};
