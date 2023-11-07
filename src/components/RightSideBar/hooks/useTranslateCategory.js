const { useTranslation } = require('react-i18next');

export const useTranslateCategory = () => {
  const { t } = useTranslation();

  const translateCategory = item => {
    switch (item) {
      case 'huevos':
        return t('huevos');
      case 'cereales':
        return t('cereales');
      case 'harina':
        return t('harina');
      case 'lácteos':
        return t('lácteos');
      case 'pez':
        return t('pez');
      case 'carne':
        return t('carne');
      case 'bayas':
        return t('bayas');
      case 'salchicha':
        return t('salchicha');
      case 'aceites':
        return t('aceites');
      case 'fruta':
        return t('fruta');
      case 'hongos':
        return t('hongos');
      case 'verduras y hortalizas':
        return t('verduras y hortalizas');
      case 'nueces':
        return t('nueces');
      case 'semillas':
        return t('semillas');
      case 'frutos secos':
        return t('frutos secos');
      case 'bebidas alcohólicas':
        return t('bebidas alcohólicas');
      case 'refrescos':
        return t('refrescos');
      case 'amapola':
        return t('amapola');
      case 'sésamo':
        return t('sésamo');
      default:
        break;
    }
  };

  return { translateCategory };
};
  
       
       
     
      
       
    
    
 