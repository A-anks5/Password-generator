# Password Generator

A lightweight, client-side random password generator built with vanilla HTML, CSS, and JavaScript. No libraries, no dependencies, no data sent anywhere. Everything runs directly in the browser.

---

## What it does

The tool generates two random passwords simultaneously based on user-defined conditions. You pick the length and choose which character types to include, hit the button, and both passwords appear instantly. Clicking on either password copies it to your clipboard.

---

## Project Structure

```
pwdgen.html          - Main markup and layout
pwdgen.js            - Password generation and clipboard logic
style_pwdgen.css     - Styling and dark theme
```

---

## Features

- Generates two unique passwords at once for easy comparison
- Configurable character set via checkboxes:
  - Uppercase letters (A-Z)
  - Lowercase letters (a-z)
  - Numbers (0-9)
  - Special characters (!@#$%^&*...)
- Password length input (1-15 characters)
- One-click copy to clipboard on either password
- If no character type is selected, falls back to the full character set automatically
- Entirely front-end — nothing is stored or transmitted

---

## How to Use

1. Open `pwdgen.html` in any modern browser (no server needed).
2. Set the desired password length in the input field.
3. Check one or more character type boxes depending on what your password needs to contain.
4. Click **Generate passwords**.
5. Two passwords will appear at the bottom. Click either one to copy it.

---

## Configuration

All character sets are defined at the top of `pwdgen.js` and can be modified if needed:

```js
const chAZ  // Uppercase A-Z
const chaz  // Lowercase a-z
const ch09  // Digits 0-9
const chsp  // Special characters
```

To expand a set or remove certain characters (e.g., exclude ambiguous characters like `0`, `O`, `l`, `1`), just edit those arrays directly.

---

## Known Limitations

- Maximum password length is capped at 15 characters. This is enforced in the `genpassword()` function and can be raised by changing the condition `n.value <= 15`.
- Passwords are generated using `Math.random()`, which is not cryptographically secure. For general use and low-risk accounts it works fine, but if you need passwords for high-security applications, consider replacing it with `crypto.getRandomValues()`.
- The clipboard copy uses the `navigator.clipboard` API, which requires the page to be served over HTTPS or localhost in some browsers. Opening the file directly (`file://`) may cause clipboard access to fail depending on the browser.

---

## Possible Improvements

- Add a password strength indicator
- Allow longer passwords (beyond 15 characters)
- Switch to `crypto.getRandomValues()` for cryptographic randomness
- Add a "guaranteed at least one of each selected type" option to ensure full compliance with strict password policies
- Generate more than two passwords at a time

---

## Browser Compatibility

Works in all modern browsers. No build tools, no bundler, no npm install required. Just open the HTML file and it runs.

---

## License

No license specified. Use freely.
