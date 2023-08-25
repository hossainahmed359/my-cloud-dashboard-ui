
export default function userRightOffcanvas() {

    // STATE
    const rightOffcanvasState = {
        isOpen: false,
    }

    // ELEMENT
    const element = document.getElementById('offcanvas-right');

    // SIDEBAR OPENE
    function handleRightOffcanvasOpen() {
        element.classList.add('right-offcanvas-slide-in');
        element.classList.add('open');
        setTimeout(function () {
            element.classList.remove('right-offcanvas-slide-in');
        }, 300)
    }

    // SIDEBAR CLOSE
    function handleRightOffcanvasClose() {
        element.classList.add('right-offcanvas-slide-out');
        element.classList.remove('open');
        setTimeout(function () {
            element.classList.remove('right-offcanvas-slide-out');
        }, 300)
    }


    return { rightOffcanvasState, handleRightOffcanvasOpen, handleRightOffcanvasClose }
}