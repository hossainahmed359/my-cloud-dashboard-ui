
export default function useLeftSidebarOffcanvas() {

    // STATE
    const leftSidebarState = {
        isOpen: false,
    }

    // ELEMENT
    const element = document.getElementById('sidebar-left');

    // SIDEBAR OPENE
    function handleLeftSidebarOpen() {
        element.classList.add('left-offcanvas-slide-in');
        element.classList.add('open');
        setTimeout(function () {
            element.classList.remove('left-offcanvas-slide-in');
        }, [300])
    }

    // SIDEBAR CLOSE
    function handleLeftSidebarClose() {
        element.classList.add('left-offcanvas-slide-out');
        element.classList.remove('open');
        setTimeout(function () {
            element.classList.remove('left-offcanvas-slide-out');
        }, [300])
    }


    return { leftSidebarState, handleLeftSidebarOpen, handleLeftSidebarClose }
}