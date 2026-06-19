---
"react-router-devtools": patch
---

Fix `Cannot find package 'vite-node'` (#261) and support React Router 8 / Vite 8.

`vite-node` is imported at runtime by the Vite plugin but was only declared as a `devDependency`, so consumers relied on it being a phantom dependency of `@react-router/dev@7`. React Router 8 dropped `vite-node` from its dependencies, which broke resolution for any project on RR8. `vite-node` is now a real `dependency` (`^5.0.0 || ^6.0.0`, covering both Vite 7 and Vite 8), and the `vite` peer range was tidied to `>=5.0.0` so it explicitly admits Vite 8 alongside React Router's existing `>=7.0.0` peer range (which already admits v8).
