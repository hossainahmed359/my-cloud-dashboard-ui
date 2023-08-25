import './assets/styles/main.scss';

import userAddEvent from './script/useAddEvent';
import useLeftSidebarOffcanvas from './script/useLeftSidebarOffcanvas';
import userRightOffcanvas from './script/userRightOffcanvas';

const { addEventToMultitpleElements } = userAddEvent();
const { leftSidebarState, handleLeftSidebarOpen, handleLeftSidebarClose } = useLeftSidebarOffcanvas();
const { rightOffcanvasState, handleRightOffcanvasOpen, handleRightOffcanvasClose } = userRightOffcanvas();


function leftSidebarToggler() {
    const isOpen = leftSidebarState['isOpen'];
    
    if(isOpen) {
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
]

addEventToMultitpleElements(eventItemList);
