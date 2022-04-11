import {
  AppProps,
  ErrorBoundary,
  ErrorComponent,
  ErrorFallbackProps,
  useQueryErrorResetBoundary,
} from "blitz";
import { WalletProvider } from "components/WalletProvider";

// Root component of the app
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary
      FallbackComponent={RootErrorFallback}
      onReset={useQueryErrorResetBoundary().reset}
    >
      <WalletProvider>
        <Component {...pageProps} />
      </WalletProvider>
    </ErrorBoundary>
  );
}

// Render any uncaught server errors in webpage
function RootErrorFallback({ error }: ErrorFallbackProps) {
  return (
    <ErrorComponent
      statusCode={error.statusCode || 400}
      title={error.message || error.name}
    />
  );
}
