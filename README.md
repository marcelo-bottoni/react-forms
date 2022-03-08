<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">React Forms</h3>

  <p align="center">
    Create awesome forms, with less code!
    <br />
    <a href="https://bottoni.com.br/react/forms" target="_blank"><strong>Check the Demo</strong></a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#form-styles">Form Styles</a></li>
    <li><a href="#Creating a Form">Creating a Form</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Forms in web applications are everywhere!

You will yourself using them for signin, signup, updating your profile, reporting a bug, contacting support... and so on!

No matter what the form is used for, it normally a common goal that is, request users to provide some data following some particular rules. Simple, right? So, why not coding these forms in a simple way as well?

Enters "React Forms". A sample project that combines <a href="https://react-hook-form.com" target="_blank">React Hook Forms</a> and <a href="https://styled-components.com" target="_blank">Styled Components</a> to create a powerfull, yet easy to use and adapt, soluction for working with forms in React.js applications.

The goal of this project is to provide a set of components that you can easily add into your projects to create awesome forms (but without too much code making it a mess).


### Built With

This sample project is built on top of two basic dependencies.

* [React Hook Forms](https://react-hook-form.com)
* [Styled Components](https://styled-components.com)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Experimenting with the "React Forms" project is very simple!

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/marcelo-bottoni/react-forms
   ```
2. Install packages
   ```sh
   yarn install
   ```
3. Run the application
   ```sh
   yarn dev
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- FORM STYLES -->
## Form Styles

The "React Forms" can be used with and without a theme. And this sample project provides both options.

### Without a theme
To use "React Forms" without support to themes, you simply need to add its CSS file (using SASS for convenience and variables) and your are done!

Check the file (`src/demo/SimpleDemo.tsx`) to see a working example without themes.

### With themes
To use "React Forms" with support to themes, you will be using "Styled Components"!

Check the file (`src/demo/ThemedDemo.tsx`) to see a working example with themes.

Check both examples (simple and themed). You will notice that the only difference is that, in order to use themes, you are wrapping your code with a "ThemeProvider" from "Styled Components". The rest of the code (that demonstrates the forms) is exactly the same.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CREATING A FORM -->
## Creating a Form

Now, lets get to good part! Lets create a first form with React Forms.

Lets say you want a sign in form, where the user has to inform an email and a password. Also, both inputs are required. So, if the user does not enter some data, the UI must complaint about it and request the user to fill the missing values. You also want to allow the user to "view his password", so you want to have that show/hide button inside the password input.

Well, this is what the code to create your UI would look like:

```react.js
  <form onSubmit={handleSubmit(onSubmit)}>

      <Input label="Email" {...register("email", { required: vRequired() })} error={errors.email}/>
      <InputPassword label="Password" {...register("password", { required: vRequired() })} error={errors.password}/>

      <button type="submit">Sign In</button>

  </form>
```

Not so big, right? 

But what about the codes for **managing the form state**, **validating the inputs** and **displaying errors** when necessary?

Well, "React Hook Forms" will handle that, so all you need to do is use it. Lets see the complete code for a functional sign in form, with state, validation, erros...
```react.js
  import { useForm } from "react-hook-form";

  // * REACT FORMS
  // - Load fields and validation rules from "React Forms"
  import { Input, InputPassword } from '../../forms/fields/Basic';
  import { vRequired } from "../../forms/validations/Validation";


  export function SignInForm ()
  {
      // * FORM Configuration
      // - Configures the form, using "React Hook Forms"
      const { register, handleSubmit, formState: { errors } } = useForm ();

      // * FORM Submit
      // - Handles the form submission
      function onSubmit (data: {})
      {
          // SUPER! You have valid email and password in hand now!
      }

      return (
          <form onSubmit={handleSubmit(onSubmit)}>

              <Input label="Email" {...register("email", { required: vRequired() })} error={errors.email}/>
              <InputPassword label="Password" {...register("password", { required: vRequired() })} error={errors.password}/>

              <button type="submit">Sign In</button>

          </form>
      );
  }
```



<!-- ROADMAP -->
## Roadmap

Well, this project is just starting. Here are some stuff I'm working on.

- [x] Basic Fields (input, select, checkbox, radio, textarea)
- [x] Styles (with and without themes)
- [x] Validations (required, min, max, minLength, password confirm, ...)
- [ ] Localization
- [ ] Advanced Fields!
    - [ ] Switch
    - [ ] Select With Search
    - [ ] Select Multi (that is good to use)
    - [ ] Slider
    - [ ] Input File
    - [ ] File Uploader
    - [ ] Photo Uploader
- [ ] Turn this into a package!

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Marcelo F Bottoni - [@marcelobottoni](https://twitter.com/marcelobottoni) - marcelo.bottoni.85@gmail.com

Project Link: [https://github.com/marcelo-bottoni/react-forms](https://github.com/marcelo-bottoni/react-forms)

<p align="right">(<a href="#top">back to top</a>)</p>