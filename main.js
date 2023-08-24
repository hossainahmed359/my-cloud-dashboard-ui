import './assets/styles/main.scss';

import userAddEvent from './script/useAddEvent';
import useLeftSidebarOffcanvas from './script/useLeftSidebarOffcanvas';

const { addEventToMultitpleElements } = userAddEvent();
const { leftSidebarState, handleLeftSidebarOpen, handleLeftSidebarClose } = useLeftSidebarOffcanvas();


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
]

addEventToMultitpleElements(eventItemList);