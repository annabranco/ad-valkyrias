import React from 'react';
import { connect } from 'frontity';

import { EnLanguageFlag, EsLanguageFlag, Logo } from '../../../assets/images';
import { LanguageButton } from './ChangeLanguageButton.styles';

const ChangeLanguageButton = ({ state, actions }) => {
  const { language } = state.theme;

  const onChangeLanguage = language => {
    actions.theme.changeLanguage(language, true);
  }

  const renderChangeLanguageButton = () => {
    const buttonProps = {
      es: {
        alt: 'Change language to English',
        buttonLabel: 'Change to English',
        onClick: () => onChangeLanguage('en'),
        image: EnLanguageFlag,
      },
      en: {
        alt: 'Cambiar el idioma para Castellano',
        buttonLabel: 'Cambiar para Castellano',
        onClick: () => onChangeLanguage('es'),
        image: EsLanguageFlag,
      }
    }

    return <LanguageButton {...buttonProps[language]} />
  }

  return (
    <>
      {renderChangeLanguageButton()}
    </>
  );
};

export default connect(ChangeLanguageButton);
