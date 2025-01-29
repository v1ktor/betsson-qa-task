# betsson-qa-task

# Technical Stack
- [Playwright](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/)

# How to run the tests and other scripts
- `npm run test` - runs all the tests
- `npm run test:ui` - runs only the UI tests
- `npm run test:api` - runs only the API tests
- `npm run eslint:fix` - runs eslint and fixes the TypeScript issues
- `npm run prettier:fix` - runs prettier and fixes the formatting issues

# Report

The framework is Playwright for both UI and API e2e tests.

```
.
├── api/
│   ├── error/
│   │   └── dto
│   └── pet/
│       ├── dto
│       └── data
├── config
├── tests/
│   ├── api/
│   │   └── pet
│   └── ui/
│       ├── checkout
│       └── login
└── ui/
    ├── data
    ├── pages/
    │   ├── cart
    │   ├── checkout
    │   ├── inventory
    │   └── login
    └── utils
```

The `ui` folder contains the `data`, `pages` and `utils` folder:

- I usually split the application into logical parts (I call them `pages`) and create a POM for each of them. I tend to
  keep POMs as small as possible, that's why I usually store selectors, methods for validation and types in separate
  files.
- The `utils` folder contains all the helper functions that can be reused across the tests and POMs.
- The `data` folder contains all the data that is needed for validation in the tests.

The `api` folder is also split into logical parts, in this case into `error` and `pet`. Each of them contains `dto` and
`data` folders. The `dto` folder contains the types for the requests and responses, and the `data` folder contains the
data that is needed for the tests.

The `config` folder contains test fixtures, which allows me to initialize POMs for UI tests and also use `apiBaseURL`
whenever I need to make an API request.

The `tests` folder contains the tests for both UI and API.
The `tests/ui` folder contains tests for the `checkout` and `login` pages. For the `checkout` tests I set a cookie to bypass
the login page, so I can test the checkout flow directly.
The `tests/api` folder contains tests for the `pet` API endpoints.

While writing the tests I have found one issue with `saucedemo` application:

- Calculation/Displaying bug. The price of some selected items is calculated with floating-point precision error - e.g.
  9.99 + 49.99 is displayed as `$59.980000000000004` instead of `$59.98`

I have also found one issue with the `petstore` application:

- The API documentation states that name is required field and possible 405? (I think more suitable response code is
  400) error should have be thrown. However, the API allows to create a pet without a name.