
import React, { createContext, useContext, useReducer } from 'react';


const initialState = {
  policies: [],
  claims: [],
};

// Define actions
const actionTypes = {
  ADD_POLICY: 'ADD_POLICY',
  ADD_CLAIM: 'ADD_CLAIM',
};


const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_POLICY:
      return { ...state, policies: [...state.policies, action.payload] };
    case actionTypes.ADD_CLAIM:
      return { ...state, claims: [...state.claims, action.payload] };
    default:
      return state;
  }
};


const AppContext = createContext();

// Create context provider
export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};
