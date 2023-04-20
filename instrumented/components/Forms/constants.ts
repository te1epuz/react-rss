export const FORM_RULES: {
  [index: string]: { fieldName: string; reg: RegExp; description: string };
} = {
  id: {
    fieldName: 'id',
    reg: /[1-999]/,
    description: 'should be a number > 0',
  },
  name: {
    fieldName: 'Name*:',
    reg: /^[A-Z]{1}([a-zA-Z]){1,}$/,
    description: '*should start with uppercase and be more than 1 letter',
  },
  gender: {
    fieldName: 'Gender*:',
    reg: /\S/,
    description: '*select gender',
  },
  date: {
    fieldName: 'Date of birth*:',
    reg: /^(19[0-9][0-9]|20([0-1][0-9]|2[2]))\-(0[1-9]|1[0-2])\-(0[1-9]|[1-2][0-9]|30)$/,
    description: '*select date between 1900 and 2022',
  },
  country: {
    fieldName: 'Country*:',
    reg: /\S/,
    description: '*select country',
  },
  checkbox: {
    fieldName: 'Share all my personal data*',
    reg: /true/,
    description: '*should be checked',
  },
  file: {
    fieldName: 'Upload picture*:',
    reg: /\S/,
    description: '*select file',
  },
};
