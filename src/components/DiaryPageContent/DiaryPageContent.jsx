import DiaryProductsList from 'components/DiaryProductsList';
import { Spinner } from 'components/Spinner';
import { diaryApi } from 'redux/apis';
import { DiaryPageStyled } from './DiaryPageContent.styled';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BlockWrapper } from 'components/Container';
import { useShowForm } from './hooks';
import { useTranslation } from 'react-i18next';
import EmptyListTitle from 'components/EmptyListTitle';
import { DiaryCalendarAndForm } from './DiaryCalendarAndForm';
import { useMedia, useMobileModal } from 'hooks/ui';
import {
  AddProductButton,
  AddProductButtonWrapper,
  AddProductIcon,
} from 'components/Forms/DiaryAddProductForm/AddProduct.mui';
import { AlertModal } from 'components/AlertModal';

export const DiaryPageContent = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const shouldShowForm = useShowForm(); // true only for now or future dates
  const currentDate = useSelector(state => state.calendar.activeDate);
  const [alertOptions, setAlertOptions] = useState({});
  const {
    title = '',
    deleteProduct = () => {},
    deletingInfo = {},
  } = alertOptions;

  const [addProduct] = diaryApi.useAddProductMutation();
  const { data = {}, isLoading } =
    diaryApi.useGetProductsByDateQuery(currentDate);
  const { data: { consumedProducts = [] } = {} } = data;

  const getNotifyData = data => {
    const { title, deleteProduct, deletingInfo } = data;
    setAlertOptions({ title, deleteProduct, deletingInfo });
    toggleModal();
  };

  const toggleModal = () => setShowModal(!showModal);

  const handleCloseModal = () => {
    deleteProduct(deletingInfo);
    setShowModal(!showModal);
  };

  const { isMobile } = useMedia();

  const [, openMobileModal] = useMobileModal();

  return (
    <BlockWrapper>
      <DiaryPageStyled>
        <DiaryCalendarAndForm
          addProduct={addProduct}
          shouldShowForm={shouldShowForm}
          isMobile={isMobile}
        />

        {isLoading ? (
          <Spinner />
        ) : Boolean(consumedProducts.length) ? (
          <DiaryProductsList
            products={consumedProducts}
            currentDate={currentDate}
            disabled={!shouldShowForm}
            getNotifyData={getNotifyData}
            onOpenModal={setShowModal}
          />
        ) : (
          <EmptyListTitle>{t('noFood')}</EmptyListTitle>
        )}

        {isMobile && shouldShowForm && (
          <AddProductButtonWrapper>
            <AddProductButton
              color="primary"
              variant="contained"
              type="button"
              onClick={openMobileModal}
            >
              <AddProductIcon />
            </AddProductButton>
          </AddProductButtonWrapper>
        )}
      </DiaryPageStyled>

      <AlertModal
        leftBtnText={t('no')}
        rightBtnText={t('yes')}
        open={showModal}
        onClick={handleCloseModal}
        setOpen={setShowModal}
        dialogTitle={t('delete')}
        contentText={title}
      />
    </BlockWrapper>
  );
};
