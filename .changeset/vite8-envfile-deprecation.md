---
"react-router-devtools": patch
---

Stop emitting the `envFile` deprecation warning on Vite 8.

The internal vite-node server passes `envFile: false` to `createServer`, which Vite 8 deprecated in favour of `envDir: false`. Every Vite 8 consumer therefore saw `The 'envFile' option is deprecated, please use 'envDir: false' instead.` on startup, because the warning is emitted from a top-level `createServer` call that no user config can reach. The key is now chosen from the installed Vite major, so Vite 8 gets `envDir: false` while the existing `>=5` peers keep `envFile: false`.
