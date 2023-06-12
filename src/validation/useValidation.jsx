import { useState, useEffect } from "react";

const useValidation = (callback) => {
  const [inputValuesLength, setInputValuesLength] = useState(0);
  const [isErrorsList, setIsErrorsList] = useState({});
  const [checkedValuesList, setCheckedValuesList] = useState({});
  //
  const checkEmail = (rawEmail) => {
    const { name, value } = grabRawValues(rawEmail);
    //
    if (
      !new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ).test(value)
    ) {
      setIsErrorsList((oldValues) => {
        return {
          ...oldValues,
          [name]: {
            isError: true,
            msg: "Please enter valid email"
          }
        }
      })
      setCheckedValuesList((oldValues) =>
        handleRemoveSetNewValues(name, oldValues)
      );
    } else{
      setCheckedValuesList((oldValues) =>
        handledCheckedValues(name, value, oldValues)
      );
      setIsErrorsList((oldValues) => handleRemoveSetNewValues(name,oldValues))
    }
  };
  //
  const checkValue = (rawValue) => {
    const { name, value } = grabRawValues(rawValue);
    if (value.length <= 0) {
      setIsErrorsList((oldValues) => {
        return {
          ...oldValues,
          [name]: {
            isError: true,
            msg: "This field is required",
          },
        };
      })
      setCheckedValuesList((oldValues) => handleRemoveSetNewValues(name, oldValues))
    } else{
      setCheckedValuesList((oldValues) => handledCheckedValues(name,value,oldValues))
      setIsErrorsList((oldValues) => handleRemoveSetNewValues(name, oldValues))
    }
  };
  //
  const grabRawValues = (val) => {
    return { name: val[0].trim(), value: val[1].trim() };
  };
  //
  const handleRemoveSetNewValues  = (name,oldValues) => {
    const newValues = { ...oldValues };
    delete newValues[name];
    return newValues;
  }
  //
  /**
   * Places the values into the "checkedValuesList" 
   * after they have passed the validation
   * @param {String} name : key name of the value 
   * @param {String} value : Value that has been checked
   * @param {*} oldValues : The rest of the values that are not directly effected
   * @returns 
   */
  const handledCheckedValues = (name,value,oldValues) => {
    return {
      ...oldValues,
      [name]: value,
    };
  }
  //
  const validation = (values) => {
    Object.entries(values).forEach((v) => {
      v[0] === "email" ? checkEmail(v) : checkValue(v);
    });
    setInputValuesLength(Object.keys(values).length);
  };
  //
  const handleSubmit = () => {
    callback(checkedValuesList);
  }
  //
  useEffect(() => {
    checkedValuesList
    if (
      inputValuesLength === Object.entries(checkedValuesList).length &&
      Object.entries(isErrorsList).length <= 0 &&
      Object.entries(checkedValuesList).length > 1
    ) {
      handleSubmit();
    }
  }, [isErrorsList,checkedValuesList,inputValuesLength])
  //
  return { validation, isErrorsList };
};

export default useValidation;
