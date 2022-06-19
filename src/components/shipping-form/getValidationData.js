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
