# App Documentation

## Overview

`assignment_app` is a React Native educational demo app that showcases an international "Study Abroad" program explorer.

Key user flows:

- Home list screen of top universities/programs.
- Tap a program card to open a detail screen with program details.
- "Apply Now" CTA triggers a simple confirmation alert.

## Core features

- Static data-driven program list from `src/data/programs.ts`
- Reusable program card component (`src/components/ProgramCard.tsx`)
- Stack navigation (`Home` ↔ `Detail`) via `@react-navigation/native-stack` in `src/navigation/AppNavigator.tsx`
- Program metadata: tuition, duration, intake months, ranking, description
- Clean UI referenced from NativeWind `tailwind` style classes (via `global.css` + `tailwind.config.js`)

## File structure

- `App.tsx`: root app component, safe area + navigation container.
- `src/navigation/AppNavigator.tsx`: stack navigator setup.
- `src/screens/HomeScreen.tsx`: displays a `FlatList` of programs.
- `src/screens/DetailScreen.tsx`: program details + apply action.
- `src/components/ProgramCard.tsx`: list item UI, touchable card.
- `src/data/programs.ts`: static program dataset.
- `src/types/index.ts`: TypeScript models (`Program`, `RootStackParamList`).

## Data model

Program shape (`Program`):

- id: number
- university: string
- country: string
- flag: emoji
- description: short text
- fullDescription: long text
- tuition: amount/currency/period (`year`|`semester`)
- duration: string
- intake: string[]
- ranking: string

## Run locally (project-specific)

From repository root (`assignment_app/assignment_app`):

1. `npm install`
2. `npm start` (Metro bundler)
3. Android: `npm run android`
4. iOS: `npx pod-install` then `npm run ios`

## Testing

- `npm test` runs Jest (sample at `__tests__/App.test.tsx`).

## Customization points

- Update static data in `src/data/programs.ts`.
- Customize card visuals in `src/components/ProgramCard.tsx`.
- Add new screens or filter/search logic in `HomeScreen`.
- Add persistence/service APIs by replacing static dataset with backend calls.

## Helpful notes

- The app uses TypeScript; confirm `tsconfig.json` settings for strictness.
- NativeWind requires `tailwind.config.js` and Metro config (already present).
- Navigation types are strongly typed in `src/types/index.ts`.

---

## License

MIT (or your chosen license)
