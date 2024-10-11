
# Looking IP

This React project, using the Next.js App Router, includes two main pages: a login page and an IP search page.

## Login Page
- The user is required to enter their phone number, which is validated before submission.
- After submitting the phone number, the user is redirected to the "Enter Code" page.
- The correct password/code for the demonstration is 1111. If the user enters an incorrect code, an error message will be displayed.
- Upon successful login, the user is redirected to the IP search page.

## IP Search Page
- Users can search for IP addresses on this page.
- To prevent overuse, the search functionality is throttled, allowing a maximum of 5 requests per minute.


## Features

- Validation schema 
- Search IP
- Show location
- Request limit
- State Management


## Packages

- [Leaflet](https://www.npmjs.com/package/leaflet)
- [Nextjs](https://nextjs.org/)
- [Reactjs](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [MUI](https://mui.com/)
- [Styled-component](https://www.styled-components.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [React-icons](https://www.npmjs.com/package/react-icons)

## for API key check this url give api key and pass it to .env.local
https://geo.ipify.org/docs

