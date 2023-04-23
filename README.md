# React Typescript Form

<h2><b>Objective</b></h2> - This form was done as part of a job interview for a great company that I hope I will have a chance to work with! The objective of this task was to create a mini-library project that could be used for the purpose of creating a form and submitting it. It also comes with a pre-filled default submission that was provided with the task.
  
<h2><b>How I did it</b></h2> - We have 2 Components - Form and FormInput, as well as a UserContext that is used to store the user.FormInputs have internal states and consume the context to handle the initial values. Form is responsible for setting the Context. There is also a small feature that prevents the console.log of the form during the default initialisation (initLoading state). I also wrote some CSS and a test for the app.

<h2><b>Greatest challenge</b></h2> - My greatest challenge for this task was handling the default value loading for FormInput. It had to be dynamic so I wrote a function that extracts the correct information from the context depending on which input is targeted.

<h2><b>What I learned</b></h2> - I believe I will write better TypeScript in the future thanks to this project. I also had a chance to improve my expertise with certain React features.
