# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- SASS
- Mobile-first workflow
- Javascript

### What I learned

This was a fun little challenge that helped me work on my Javascript skills.
One of the few things I learned was how to modify or disable input fields error messages which was necessary for this challenge.
	
	Ex: 

	document.querySelector('input').oninvalid = function(event) {
		event.preventDefault();
		customErrorMessageFunction();	
	}

The above would prevent from the default messages to appear while also allowing me to add my own function.
For anything other than email I noticed that I had to add the 'required' attribute in the element to get the message.

### Continued development

Learning how to make my code shorter and creating reusable functions. 
I'm not satisfied with how long the code ended up but I simply couldn't think up of a way to make one big eventListener that could identify each input field separately.

