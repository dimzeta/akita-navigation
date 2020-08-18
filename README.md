# Akita Navigation

## Install

```
npm i
```

## Get the error

```
ionic serve
```

Change tab, you should see the warning message in Web Developer Console:
`core.js:26837 Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?`

To make sure this is because of `selectPersistStateInit()`, just comment it in guards (`auth/guard/auth.guard.ts` && `auth/guard/not-auth.guard.ts`).

WARNING: The error could be magically disappear in livereload. You need to rerun `ionic serve` to get the message again.