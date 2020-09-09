# Ictinus

A React UI kit library with custom components that fits [Orfium](https://github.com/orfium) products internally.

<hr />

![npm](https://img.shields.io/npm/v/@orfium/ictinus)
[![pan](https://github.com/Orfium/orfium-ictinus/workflows/CI/badge.svg)](https://github.com/Orfium/orfium-ictinus/actions)

## 📦 Installation

```text
$ npm install @orfium/ictinus
```

```text
$ yarn add @orfium/ictinus
```

## 🔨 Usage

1. Start by wrapping your App with ictinus `ThemeProvider` component like below

```jsx
import { ThemeProvider } from '@orfium/ictinus';

const App = () => (
    <ThemeProvider>
       <Router>
         ...
       </Router
    </ThemeProvider>
)
```

2.  That's it, now you are ready to go.

```js
import { Select, Button } from '@orfium/ictinus';
```

## ✨ Extra

### Theme usage

Now you can can have access to the library's theme config by using the hook provided

```
import { useTheme } from '@orfium/ictinus';

const theme = useTheme();
```

### Theme config

You can apply your own branded colours for each product at the definition of the ThemeProvider. This way you can have access everywhere.

```
<ThemeProvider
    theme={{
        palette: {
            branded1: theme.colors.orange,
            branded2: theme.colors.ciel,
        },
    }}
>
    ...
</ThemeProvider>
```
