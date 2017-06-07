## composition

---

````js
const initials = (ws) => {
  const firstLetters = map(ws, firstLetter);
  const uppercaseLetters = map(firstLetters, uppercase);
  return fold(uppercaseLetters, '', add);
};
````

there's still a lot of noise

---

`(f ∘ g)(x) = f(g(x))`

`h = f ∘ g`

`h(x) = f(g(x))`

---

