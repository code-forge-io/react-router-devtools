# react-router-devtools

## 6.2.2

### Patch Changes

- aae92e4: Fix `Cannot find package 'vite-node'` (#261) and support React Router 8 / Vite 8.

  `vite-node` is imported at runtime by the Vite plugin but was only declared as a `devDependency`, so consumers relied on it being a phantom dependency of `@react-router/dev@7`. React Router 8 dropped `vite-node` from its dependencies, which broke resolution for any project on RR8. `vite-node` is now a real `dependency` (`^5.0.0 || ^6.0.0`, covering both Vite 7 and Vite 8), and the `vite` peer range was tidied to `>=5.0.0` so it explicitly admits Vite 8 alongside React Router's existing `>=7.0.0` peer range (which already admits v8).

## 6.2.1

### Patch Changes

- 933aad5: Fix AST transform to correctly handle aliased imports (#251)
- 933aad5: Add depth limit and cycle detection to `convertBigIntToString` to prevent infinite recursion on circular or deeply nested objects (#250)

## 6.0.1

### Patch Changes

- 34e393d: Bump versions

## 6.0.0

### Major Changes

- f59cf14: Migration to TanStack Devtools is here! 🎉

  You can now leverage the powerful features of TanStack Devtools within React Router Devtools, enhancing your debugging and development experience.

  You can easily create your own devtool plugins, inspect application state, and trace network requests with improved visibility.

  ### Key Changes:
  - **TanStack Integration**: Seamless integration with TanStack Devtools for advanced debugging capabilities
  - **Enhanced UI**: New panels and tabs for better state and network inspection
  - **Improved Performance**: Optimized for faster load times and reduced overhead
  - **Middleware Support**: Ability to log middleware events and actions for deeper insights and also see them on the network tab
  - **Extended Configuration**: New configuration options to customize TanStack Devtools behavior alongside React Router

  ### Migration Steps:
  1. Update your configuration to include TanStack-specific options.
  2. Review and adjust any custom plugins to ensure compatibility with the new TanStack integration.
  3. Test your application to verify that all devtools features are functioning as expected.

  ### Features that have been removed:
  - The route creation via devtools UI has been removed.
  - Server info on the active page tab has been removed.

## 5.1.6

### Patch Changes

- 1e6279f: update docs

## 5.1.5

### Patch Changes

- 1c186f8: update documentation

## 5.1.4

### Patch Changes

- 80e6a83: Migrated documentation to our template
