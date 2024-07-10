import React, { createContext, useState, ReactNode } from 'react';

// Define the type for the App state
interface AppState {
  agreement: boolean;
  updates: boolean;
  isOpenAgreement: boolean;
  isPassword: boolean;
  isExists: boolean;
  isIncorrect: boolean;
  loggedIn: boolean;
  AccNotExistent: boolean;
  backgroundBlur: boolean;
  serverError: boolean;
}

// Define the type for the context value
interface AppContextProps {
  appState: AppState;
  toggleAgreement: () => void;
  toggleUpdates: () => void;
  toggleIsOpenAgreement: () => void;
  toggleIsPassword: () => void;
  toggleIsExists: () => void;
  toggleIsIncorrect: () => void;
  toggleLoggedIn: () => void;
  toggleAccNotExistent: () => void;
  toggleBackgroundBlur: () => void;
  toggleServerError: () => void;
  setLoggedIn: (value: boolean) => void;
}

// Create a Context with a default value
export const AppContext = createContext<AppContextProps | undefined>(undefined);

// Create a Provider component
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [appState, setAppState] = useState<AppState>({
    agreement: false,
    updates: false,
    isOpenAgreement: false,
    isPassword: false,
    isExists: false,
    isIncorrect: false,
    loggedIn: false,
    AccNotExistent: false,
    backgroundBlur: false,
    serverError: false,
  });

  const toggleState = (key: keyof AppState) => {
    setAppState(prevState => ({ ...prevState, [key]: !prevState[key] }));
  };

  const toggleAgreement = () => toggleState('agreement');
  const toggleUpdates = () => toggleState('updates');
  const toggleIsOpenAgreement = () => toggleState('isOpenAgreement');
  const toggleIsPassword = () => toggleState('isPassword');
  const toggleIsExists = () => toggleState('isExists');
  const toggleIsIncorrect = () => toggleState('isIncorrect');
  const toggleLoggedIn = () => toggleState('loggedIn');
  const toggleAccNotExistent = () => toggleState('AccNotExistent');
  const toggleBackgroundBlur = () => toggleState('backgroundBlur');
  const toggleServerError = () => toggleState('serverError');
  const setLoggedIn = (value: boolean) => setAppState(prevState => ({ ...prevState, loggedIn: value }));

  return (
    <AppContext.Provider value={{
      appState,
      toggleAgreement,
      toggleUpdates,
      toggleIsOpenAgreement,
      toggleIsPassword,
      toggleIsExists,
      toggleIsIncorrect,
      toggleLoggedIn,
      setLoggedIn,
      toggleAccNotExistent,
      toggleBackgroundBlur,
      toggleServerError
    }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for using the AppContext
export const useApp = (): AppContextProps => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
