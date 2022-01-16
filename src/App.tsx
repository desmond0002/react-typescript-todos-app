import React from 'react';

import { TodosList, TodosList2 } from './components/TodosList'
import './models/init'
import { GlobalStyle } from './styles/global';
import './i18n/config';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation(['ns1', 'ns2']);

  return (
    <>
      <GlobalStyle />
      <div>
        <h2>{t('ns1:title')}</h2>
        <TodosList />
      </div>
      <div>
        <h2>{t('ns2:title')}</h2>
        <TodosList2 />
      </div>
    </>
  )
}

export default App
