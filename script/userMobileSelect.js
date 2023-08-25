import useModal from "./useModal";

const { appendModalHeader, appendModalBodyContent, handleModalOpen } = useModal();

const optionItemMeta = [
    {
        imgUrl: '/assets/images/recently-uploaded/img-one.png',
        title: 'Option One',
        date: '10 oct, 10:23pm',
    },
    {
        imgUrl: '/assets/images/recently-uploaded/img-two.png',
        title: 'Option Two',
        date: '10 oct, 10:23pm',
    },
    {
        imgUrl: '/assets/images/recently-uploaded/img-three.png',
        title: 'Option Three',
        date: '10 oct, 10:23pm',
    },
    {
        imgUrl: '/assets/images/recently-uploaded/img-four.png',
        title: 'Option Four',
        date: '10 oct, 10:23pm',
    },
    {
        imgUrl: '/assets/images/recently-uploaded/img-five.png',
        title: 'Option Five',
        date: '10 oct, 10:23pm',
    },
]


function getSearchInnerHtml() {

    let quickSearchItems = ``;

    optionItemMeta.forEach(item => {
        quickSearchItems += `
        <div class="item flex justify-start items-center gap-3 w-100 rounded-md">
            <div class="flex-center">
                <img src=${item.imgUrl} alt="marcus-family">
            </div>
            <div class="flex-1">
                <div class="flex flex-col justify-start items-start gap-1 ">
                    <p class="font-md font-weight-500 color-purple-light">${item.title}</p>
                    <p class="font-sm font-weight-400 color-sky-light">${item.date}</p>
                </div>
            </div>
        </div>
            `
    })

    const element = `
    <div class="mobile-option-list">
        <div class="mobile-option-list__items flex flex-col justify-center items-start">
            ${quickSearchItems}
        </div>
    </div>`;


    return element;
}


export default function useMobileSelect() {

    function handleMobileSelectModalOpen() {
        // ADD MODAL HEADER
        const headerElement = `<h2 class="font-xl color-purple-dark font-weight-600">Select Options</h2>`;
        appendModalHeader(headerElement);

        // ADD MODAL BODY
        const bodyElement = getSearchInnerHtml();
        appendModalBodyContent(bodyElement);

        // OPEN MODAL
        handleModalOpen();
    }

    return {
        handleMobileSelectModalOpen
    }
}

