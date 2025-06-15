"npm install"
"npx expo start"
"a" or "w"
("a" view on android or "w" to test responsive)

## Rules

| Type                       | Rule                                        | Example                           |
| -------------------------- | ------------------------------------------- | --------------------------------- |
| Component names            | PascalCase                                  | LoginForm, CustomButton, UserCard |
| Variables / functions      | camelCase                                   | userData, fetchPosts, handleLogin |
| Component files            | PascalCase (same as component name)         | UserCard.tsx, HomeScreen.tsx      |
| Logic/hook files           | camelCase (for easy distinction)            | useAuth.ts, useDebounce.ts        |
| StyleSheet objects         | camelCase                                   | container, button, title          |
| Shared UI folders          | Typically ui/, components/ui/               | ui/Button.tsx, ui/Input.tsx       |
| Screen folders             | screens/ + PascalCase screen name           | screens/LoginScreen.tsx           |
| Screen names in navigation | PascalCase or snake_case (system dependent) | Home, Settings, profile_settings  |
