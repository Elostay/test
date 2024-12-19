This is a test task for Develops Today

## Getting Started

```bash
git clone https://github.com/Elostay/test.git
#and
npm i
#and
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- **Home Page**:

  - Users can filter cars based on their make and year.
  - Interactive UI with responsive design.

- **Result Page**:

  - Displays the results of the query based on the selected make and year.
  - Accessible via the route `/result/makeid/year`.

- **Dynamic Data Handling**:
  - API requests are managed in the `api` folder.
  - Data fetched from the backend includes non-unique IDs, so `uid` is used to generate unique keys for rendering.

## Technologies Used

- **Next.js**: For server-side rendering and routing.
- **TypeScript**: For type safety and enhanced developer experience.
- **Tailwind CSS**: For responsive and modern styling.
- **Material-UI (MUI)**: For pre-built, customizable components.
- **React-Spinners**: For elegant loading animations.
- **Axios**: For making API requests.
- **uid**: To handle non-unique IDs from the backend.
- **Prettier**: For consistent code formatting.
- **ESLint**: For maintaining high code quality.
