import { ThemeProvider } from "styled-components";

import { Transactions } from "./pages/Transactions";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";

import { TransactionsProvider } from "./contexts/TransactionsContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  );
}

export { App };
