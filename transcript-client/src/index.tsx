import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { HashRouter } from "react-router-dom";
import { TranscriptionProvider } from "src/context/TranscriptionContext";
import { ToastContainer } from "react-toastify";
import App from "src/App";
import theme from "src/theme/theme";
import { AudioProvider } from "./context/AudioContext";
import { EditorProvider } from "./context/EditorContext";
import { TutorialProvider } from "./context/TutorialContext";
import { ColorModeScript } from "@chakra-ui/react";
import GlobalStyle from "./theme/global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <HashRouter>
      <ChakraProvider theme={theme}>
        <GlobalStyle />
        <TutorialProvider>
          <TranscriptionProvider>
            <EditorProvider>
              <AudioProvider>
                <App />
              </AudioProvider>
            </EditorProvider>
          </TranscriptionProvider>
        </TutorialProvider>
      </ChakraProvider>
      <ToastContainer />
    </HashRouter>
  </React.StrictMode>
);
