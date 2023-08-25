import './assets/styles/main.scss';

import userAddEvent from './script/useAddEvent';
import useLeftSidebarOffcanvas from './script/useLeftSidebarOffcanvas';
import userRightOffcanvas from './script/userRightOffcanvas';
import useModal from './script/useModal';
import useMobileSearch from './script/useMobileSearch';

const { addEventToMultitpleElements } = userAddEvent();
const { leftSidebarState, handleLeftSidebarOpen, handleLeftSidebarClose } = useLeftSidebarOffcanvas();
const { handleRightOffcanvasOpen, handleRightOffcanvasClose } = userRightOffcanvas();
const { handleModalOpen, appendModalHeader, appendModalBodyContent } = useModal();
const { handleMobileSearchModalOpen } = useMobileSearch();

function leftSidebarToggler() {
    const isOpen = leftSidebarState['isOpen'];

    if (isOpen) {
        handleLeftSidebarClose()
    } else {
        handleLeftSidebarOpen();
    }

    leftSidebarState['isOpen'] = !isOpen;
}



const eventItemList = [
    {
        id: 'left-sidebar-toggler-btn',
        event: 'click',
        callback: leftSidebarToggler
    },
    {
        id: 'right-offcanvas-opener-btn',
        event: 'click',
        callback: handleRightOffcanvasOpen
    },
    {
        id: 'left-offcanvas-close-btn',
        event: 'click',
        callback: handleRightOffcanvasClose
    },
    {
        id: 'mobile-search-btn',
        event: 'click',
        callback: handleMobileSearchModalOpen
    },
    {
        id: 'mobile-filter-btn',
        event: 'click',
        callback: handleModalOpen
    },
]

addEventToMultitpleElements(eventItemList);



