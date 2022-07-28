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
    name: "email",
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      message: "Invalid email format",
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

// interface IValidationResult
//   extends Record<
//     string,
//     | {
//         value: string;
//         message: string;
//       }
//     | Record<string, () => string | boolean>
//   > {}
interface IValidationResult {
  [x: string]:
    | string
    | {
        [x: string]: RegExp | string | (() => boolean | string);
      };
}
// interface test extends {
//   name: string;
//   required: { value: boolean; message: string };
//   maxLength?: undefined;
//   pattern?: undefined;
//   validate?: undefined;
// }

export const getValidationData = (validation: string[]) => {
  // let res = {} as keyof typeof validationRulesList;
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
