import './assets/styles/main.scss';
import useAddEvent from './script/useAddEvent';
import useLeftSidebarOffcanvas from './script/useLeftSidebarOffcanvas';
import userRightOffcanvas from './script/userRightOffcanvas';
import useMobileSearch from './script/useMobileSearch';
import useMobileSelect from './script/userMobileSelect';

const { addEventToMultitpleElements } = useAddEvent();
const { leftSidebarState, handleLeftSidebarOpen, handleLeftSidebarClose } = useLeftSidebarOffcanvas();
const { rightOffcanvasState, handleRightOffcanvasOpen, handleRightOffcanvasClose } = userRightOffcanvas();
const { handleMobileSearchModalOpen } = useMobileSearch();
const { handleMobileSelectModalOpen } = useMobileSelect();

function leftSidebarToggler() {
    const isOpen = leftSidebarState['isOpen'];

    if (isOpen) {
        handleLeftSidebarClose()
    } else {
        handleLeftSidebarOpen();
    }
}

function cleanUpAllOpenedOffcanvas() {
    const isLeftSidebarOpen = leftSidebarState['isOpen'];
    isLeftSidebarOpen && handleLeftSidebarClose();

    const isRightOffcanvasOpen = rightOffcanvasState['isOpen'];
    isRightOffcanvasOpen && handleRightOffcanvasClose();
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
        callback: () => {
            cleanUpAllOpenedOffcanvas();
            handleMobileSearchModalOpen();
        }
    },
    {
        id: 'mobile-filter-btn',
        event: 'click',
        callback: () => {
            cleanUpAllOpenedOffcanvas();
            handleMobileSelectModalOpen();
        }
    },
]

addEventToMultitpleElements(eventItemList);


// Manually Open Right Offcanvas
setTimeout(() => {
    handleRightOffcanvasOpen();
}, 3000);


