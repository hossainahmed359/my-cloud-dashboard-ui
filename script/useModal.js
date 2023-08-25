
export default function useModal() {

    // ELEMENT
    const backdrop = document.getElementById('modal-backdrop');
    const modalContainer = document.getElementById('modal-container');

    // SIDEBAR OPENE
    function handleModalOpen() {
        modalContainer.classList.add('slide-in-top')
        backdrop.classList.remove('d-none');
        modalContainer.classList.remove('d-none')
        setTimeout(function () {
            // modalContainer.classList.remove('d-none');
            modalContainer.classList.remove('slide-in-top');
        }, 300)
    }

    // SIDEBAR CLOSE
    function handleModalClose() {

        modalContainer.classList.add('slide-out-top');
        
        setTimeout(function () {
            backdrop.classList.add('d-none');
            modalContainer.classList.add('d-none');
            modalContainer.classList.remove('slide-out-top');
        }, 300)
    }


    return {  handleModalOpen, handleModalClose }
}