# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users are able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

![Desktop-screenshot](./screenshot/lg-screenshot.png)


### Links

(Links need to be added)

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS / SASS
- Flexbox
- CSS Grid
- Mobile-first workflow
- React Hooks
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev) - Bundler, Project templating and setup library


### What I learned

While I didn't really learn anything new in this project, It served as a good refresher for a few things I haven't used for a while.

The main refresher for me was using the "useContext" hook. I haven't used this in a project for a long time but I thought it was the perfect project to use it, as it allowed me to use state values thoughout the project's components without prop drilling and helped retained the values when changing though the different stages of the form.

I choose this over other things because I believed this was the right tool for the job, because it is lightweight and already built into react. Rather than a third-party state-management library like redux-toolkit, which I felt would of been a massive overkill for a project like this.

Here is an example of my useContext hook

```js
import { useState, createContext } from "react";
import { addOnsDetails, planDetails, userInputDetails } from "../miscData";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [confirmedErrorsList, setConfirmedErrorsList] = useState({});
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isPlanToggleYearly, setIsPlanToggleYearly] = useState(false);
  const [overallDetails, setOverallDetails] = useState({
    addOnsDetails,
    planDetails,
    userInputDetails,
  });
  //
  const handleUserInfoSubmit = (validatedUserInfoValues) => {
    setOverallDetails((prevValues) => {
      setCurrentStep((prevValues) => {
        if (prevValues >= 4) {
          setIsFormComplete(true);
          return 4;
        }
        return prevValues + 1;
      });
      return {
        ...prevValues,
        userInputDetails: validatedUserInfoValues,
      };
    })
  };
  //
  return (
    <AppContext.Provider
      value={{
        overallDetails,
        setOverallDetails,
        //
        isPlanToggleYearly,
        setIsPlanToggleYearly,
        //
        currentStep,
        setCurrentStep,
        //
        isFormComplete,
        setIsFormComplete,
        //
        confirmedErrorsList,
        setConfirmedErrorsList,
        //
        handleUserInfoSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
```

## Author

- Website - [DJHwebdevelopment](https://www.djhwebdevelopment.com)
- Frontend Mentor - [@David-Henery4](https://www.frontendmentor.io/profile/David-Henery4)
- linkedIn - [David Henery](https://www.linkedin.com/in/david-henery-725458241)



