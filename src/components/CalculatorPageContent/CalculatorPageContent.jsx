import { BlockWrapper } from 'components/Container';
import CalculatorСalorieForm from 'components/Forms/CalculatoralorieForm';
import PageTitle from 'components/PageTitle';
import { CalculatorContainer } from './CalculatorPageContent.styled';
import { useTranslation } from 'react-i18next';

export const CalculatorPageContent = ({ getPrivatDailyNorma }) => {
  const { t } = useTranslation();

  return (
    <BlockWrapper>
      <PageTitle title={t('title')} />
      <CalculatorContainer>
        <CalculatorСalorieForm getPrivatDailyNorma={getPrivatDailyNorma} />
      </CalculatorContainer>
    </BlockWrapper>
  );
};
