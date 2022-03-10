export const validator = (error, input) => {
  const value = input.value;
  const name = input.name;
  let errors = {};
 
  switch (input.type) {
    case "text":
      if (/[^a-zA-Z\x20]/.test(value)) {
        //Si es true es poque tiene signos extraños
        errors = {
          ...error,
          [name]: "The field cannot have signs",
        };
      } else {
        errors = {
          ...error,
          [name]: "",
        };
      }
      break;

    case "password":
      if (value.length < 5 || value.length > 15) {
        errors = {
          ...error,
          [name]: "Must be between 5 and 15 characters",
        };
        break;
      }
      if (!/[0-9]/.test(value)) {
        //Si no hay un numero:
        errors = {
          ...error,
          [name]: "The password must have at least one number",
        };
        break;
      }

      errors = {
        ...error,
        [name]: "",
      };

      break;

    case "email":
      // let val = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (!/[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+/gm.test(value)) {
        //
        errors = {
          ...error,
          [name]: "It is not a valid email",
        };
      } else {
        errors = {
          ...error,
          [name]: "",
        };
      }
      break;

      case "number":
      if (value < 1 || value > 999.99) {
        errors = {
          ...error,
          [name]: "Price must be between $0.99 and $999.99",
        };
        break;
      }

      errors = {
        ...error,
        [name]: "",
      };

      break;

    default:
      break;
  }

  if (!value) {
    errors = {
      ...error,
      [name]: "The field cannot be empty",
    };
  }
  // console.log(input,errors);

  return errors;
};
