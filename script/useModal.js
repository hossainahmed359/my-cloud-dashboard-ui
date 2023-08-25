
import useAddEvent from "./useAddEvent";
const { addEventToSingleElement } = useAddEvent();

export default function useModal() {

    // ELEMENT
    const backdrop = document.getElementById('modal-backdrop');
    const modalContainer = document.getElementById('modal-container');

    const modalHeader = document.getElementById('modal-header');
    const modalBody = document.getElementById('modal-body');

    addEventToSingleElement({
        id: 'modal-close-btn',
        event: 'click',
        callback: handleModalClose
    })

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

    // APPEND MODAL HEADER
    function appendModalHeader(element) {
        if (!element) {
            modalHeader.innerHTML = `<h2 class="font-xl color-purple-dark font-weight-600">Modal</h2>`;
        } else {
            modalHeader.innerHTML = element;
        }
    }

    // APPENT MODAL BODY CONTENT
    function appendModalBodyContent(element) {
        if(!element) {
            modalBody.innerHTML = `
            <div class='w-100 h-100 flex-center'>
                <p>No Contets!</p>
            </div>`;
        } else {
            modalBody.innerHTML = element;
        }
    }


    return { appendModalHeader, appendModalBodyContent,handleModalOpen, handleModalClose }
}