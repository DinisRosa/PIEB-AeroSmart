import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Global Navigation State (used mainly for "Back" button functionality)
  const [previousScreen, setPreviousScreen] = useState('/dashboard');

  // Form states for Registar
  const [regDate, setRegDate] = useState('');
  const [regTime, setRegTime] = useState('');
  const [regMed, setRegMed] = useState('Ventolin Evohaler');
  const [doseType, setDoseType] = useState('manutencao');
  const [regNotes, setRegNotes] = useState('');
  const [regLocation, setRegLocation] = useState('Casa');
  const [showToast, setShowToast] = useState(false);

  // Form states for Perfil / Editar Perfil
  const [profileName, setProfileName] = useState('João Silva');
  const [profileAge, setProfileAge] = useState('29');
  const [profileBlood, setProfileBlood] = useState('A+');
  const [profileHeight, setProfileHeight] = useState('168');
  const [profileWeight, setProfileWeight] = useState('64');
  const [emergencyContactName, setEmergencyContactName] = useState('Margarida Silva');
  const [emergencyContactPhone, setEmergencyContactPhone] = useState('+351 912 345 678');
  const [doctor1Name, setDoctor1Name] = useState('Dra. Sara Martins');
  const [doctor1Phone, setDoctor1Phone] = useState('+351900000001');
  const [doctor2Name, setDoctor2Name] = useState('Dr. Diogo Marques');
  const [doctor2Phone, setDoctor2Phone] = useState('+351900000002');

  // Specific screen states
  const [timeframe, setTimeframe] = useState('semana');

  const value = {
    previousScreen, setPreviousScreen,
    regDate, setRegDate,
    regTime, setRegTime,
    regMed, setRegMed,
    doseType, setDoseType,
    regNotes, setRegNotes,
    regLocation, setRegLocation,
    showToast, setShowToast,
    profileName, setProfileName,
    profileAge, setProfileAge,
    profileBlood, setProfileBlood,
    profileHeight, setProfileHeight,
    profileWeight, setProfileWeight,
    emergencyContactName, setEmergencyContactName,
    emergencyContactPhone, setEmergencyContactPhone,
    doctor1Name, setDoctor1Name,
    doctor1Phone, setDoctor1Phone,
    doctor2Name, setDoctor2Name,
    doctor2Phone, setDoctor2Phone,
    timeframe, setTimeframe
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useAppContext = () => useContext(AppContext);
