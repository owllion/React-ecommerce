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
      value: 30,
      message: "Input cannot exceed 30 characters",
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
    name: "phone",
    pattern: {
      value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      message: "Please enter a valid phone number",
    },
  },
  {
    name: "email",
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      message: "Invalid email format",
    },
  },
  {
    name: "cardNumber",
    pattern: {
      value:
        /^((4\d{3})|(5[1-5]\d{2})|(6011)|(34\d{1})|(37\d{1}))-?\s?\d{4}-?\s?\d{4}-?\s?\d{4}|3[4,7][\d\s-]{15}$/,
      message: "Please enter 4242 4242 4242 4242",
    },
  },
  {
    name: "cardExpiration",
    pattern: {
      value: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/gm,
      message: "Invalid expiration date",
    },
  },
  {
    name: "passwordValidation",
    validate: {
      lessThanEight: (v: string) =>
        /(?=.{8,})/.test(v) || "Password must be eight characters or longer",
      haveUppercase: (v: string) =>
        /(?=.*[A-Z])/.test(v) ||
        "Password must contain at least 1 uppercase alphabetical character",
      haveLowercase: (v: string) =>
        /(?=.*[a-z])/.test(v) ||
        "Password must contain at least 1 lowercase alphabetical character",
      haveNumber: (v: string) =>
        /(?=.*[0-9])/.test(v) || "Password must contain at least 1 number",
      haveSpecial: (v: string) =>
        /(?=.*[!@#$%^&*])/.test(v) ||
        "Password must contain at least 1 special character",
    },
  },
];

interface IValidationResult {
  [x: string]:
    | string
    | {
        [x: string]: RegExp | string | (() => boolean | string);
      };
}

export const getValidationData = (validation: string[]) => {
  let res: IValidationResult = {};

  const filteredRules = validationRulesList.filter((item) =>
    validation.includes(item.name)
  );
  filteredRules.forEach(
    //@ts-ignore
    (item) => (res[Object.keys(item)[1]] = item[Object.keys(item)[1]])
  );

  return res;
};
