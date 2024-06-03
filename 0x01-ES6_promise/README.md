## 0x00. ES6 Promises

**0. Keep every promise you make and only make promises you can keep** `[0-promise.js]` >> Javascript script that returns a `promise` using the prototype `function getResponseFromAPI()`.

**1. Don't make a promise...if you know you can't keep it** `[1-promise.js]` >> Javascript script that returns a `promise` using the prototype `getFullResponseFromAPI(success)`, where the parameter is a `boolean`. When the argument is:
- `true`, it resolves the promise by passing an object with 2 attributes:
	- `status`: `200`
	- `body`: `'Success'`
- `false`, it rejects the promise with an error object with the message `The fake API is not working currently`

**2. Catch me if you can!** `[2-then.js]` >> Javascript script that appends three handlers to the function with prototype `function handleResponseFromAPI(promise)`, where:
- When the `promise` resolves, an object with the following attributes is returned:
	- `status`: `200`
	- `body`: `success`
- When  the `promise` rejects, an empty `Error` object gets returned
- For every resolution, the message `Got a response from the API` is logged to the console

**3. Handle multiple successful promises** `[3-all.js]` >> Javascript script that imports `uploadPhoto` and `createUser` from `utils.js` (which has functions that return `promises`), and uses the function prototype `function handleProfileSignup()` to collectively resolve all the `promises` and log `body firstName lastName` to the console. In the event of an error, it `Signup system offline` is logged to the console.

**4. Simple promise** `[4-user-promise.js]` >> Javascript script with the function prototype `function signUpUser(firstName, lastName) { }` that returns a resolved `promise` with the object:

```js
{
  firstName: value,
  lastName: value,
}
```

**5. Reject the promises** `[5-photo-reject.js]` >> Javascript script that contains an exported function named `uploadPhoto` of prototype `export default function uploadPhoto(filename) { }` that accepts one argument `fileName` of type string. This function returns a promise rejecting with an error and the string `$fileName cannot be processed`.

**6. Handle multiple promises** `[6-final-user.js]` >> Javascript script that imports `signUpUser` from `4-user-promise.js` and `uploadPhoto` from `5-photo-reject.js`, and has an exported function named `handleProfileSignup` that accepts three arguments (all of type string) named `firstName`, `lastName`, and `fileName`. This function then calls the other two functions, and returns an array with the following structure when the promises are all settled:
```js
[
  {
    status: status_of_the_promise,
    value: value or error returned by the Promise
  },
  ...
]
```

**7. Load balancer** `[7-load_balancer.js]` >> Javascript script that contains an exported function named `loadBalancer` of prototype `export default function loadBalancer(chinaDownload, USDownload) { }`, that accepts two arguments (both of type `promise`) named `chinaDownload` and `USDownload`. The function returns the value returned by the promise that resolved the first.

**8. Throw error / try catch** `[8-try.js]` >> Javascript script that contains a function named `divideFunction` of prototype `export default function divideFunction(numerator, denominator) { }`, that will accept two arguments (both of type number) named `numerator` and `denominator`. When the `denominator` argument is equal to 0, the function throws a new error with the message `cannot divide by 0`; otherwise returns the numerator divide by the denominator.

**9. Throw an error** `[9-try.js]` >> Javascript script that contains a function named `guardrail`, that accepts one argument (which is a function) `mathFunction`, and then creates and returns an array named `queue`. When the `mathFunction` is executed, the value returned is appended to the queue. If the function throws an error, the error message is appended to the queue. In every case, the message `Guardrail was processed` is added to the queue.

**10. Await / Async** `[100-await.js]` >> JavaScript script that imports `uploadPhoto` and `createUser` from `utils.js`, has an async function named `asyncUploadUser` that calls the two functions and returns an object with the format:
```js
{
  photo: response_from_uploadPhoto_function,
  user: response_from_createUser_function,
}
```
If one of the async functions fails, returns an empty object:
```js
{
  photo: null,
  user: null,
}
```
