import React, { useCallback } from "react";

//хук управления формой и валидации формы
export function useFormWithValidation() {
  // const [inputFields] = [states];
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [nameState, setNameState] = React.useState(false);
  const [emailState, setEmailState] = React.useState(false);
  const [passwordState, setPasswordState] = React.useState(false);

  const checkInputValid = (fieldName, value) => {
    switch(fieldName) {
      case 'email':
        const email = value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i);
        if (email) {
          setEmailState(true);
          setErrors({...errors, [fieldName]: ''})
        } else {
          setEmailState(false);
          setErrors({...errors, [fieldName]: 'Введите корректный email'})
        }
        break;
      case 'name':
        const name = value.match(/[\wа-я\sё]+/i);
        if (name) {
          setNameState(true);
          setErrors({...errors, [fieldName]: ''})
        } else {
          setNameState(false);
          setErrors({...errors, [fieldName]: 'Имя может содержать только символы кириллицы и латиницы'})
        }
        break;
      case 'password':
        value.length > 8 ? setPasswordState(true) : setPasswordState(false);
        if (value.length >= 8) {
          setPasswordState(true);
          setErrors({...errors, [fieldName]: ''})
        } else {
          setPasswordState(false);
          setErrors({...errors, [fieldName]: 'Пароль должен содержать минимум 8 символов'})
        }
        break;
      default:
    }
  }
  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    checkInputValid(name, value);
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, setValues, nameState, emailState, passwordState, handleChange, errors, isValid, resetForm };
}