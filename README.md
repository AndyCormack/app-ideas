# App Ideas in SvelteKit

Working on learning Svelte and SvelteKit by creating the apps listed here: [https://github.com/florinpop17/app-ideas](https://github.com/florinpop17/app-ideas)

## Tech used

- Svelte & SvelteKit
- Tailwind CSS
- DaisyUI
- Typescript
- Vitest

## Progress

### Tier 1

- [x] [Bin2Dec](https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Bin2Dec-App.md) (2024/26/01)

  #### User Stories

  - [x] User can enter up to 8 binary digits in one input field
  - [x] User must be notified if anything other than a 0 or 1 was entered
  - [x] User views the results in a single output field containing the decimal (base 10) equivalent of the binary number that was entered

  #### Bonus features

  - [x] User can enter a variable number of binary digits

- [x] [Border Radius Previewer](https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Border-Radius-Previewer.md) 2024/26/01 - 2024/27/01

  #### User Stories

  - [x] User can see a box which has a `border-radius` property applied to it
  - [x] User can change the 4 `border-radius` values that are applied to the box (top-left, top-right, bottom-left, bottom-right)
  - [x] User can copy the resulting CSS to the clipboard

  #### Bonus features

  - [x] User can change all 8 possible values of the border-radius in order to create a complex shape

- [x] [Christmas Lights](https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Christmas-Lights-App.md)

  #### User Stories

  - [x] User can press a button to start and stop the display
  - [x] User can change the interval of time controlling the change in intensity

  #### Bonus features

  - [x] User can select the color used to fill each circle
  - [x] User can specify the intensity value
  - [x] User can change the size of any circle in the row
  - [x] User can specify the number of rows to be included in the display. From
        one to seven rows can be chosen

## Developing

Start a development server:

```bash
pnpm dev

# or start the server and open the app in a new browser tab
pnpm dev --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
