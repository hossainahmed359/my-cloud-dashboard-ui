import useModal from "./useModal";
const { appendModalHeader, appendModalBodyContent, handleModalOpen } = useModal();

const quickSearchMeta = [
    {
        title: 'Sketch Files',
        email: 'Shared with: mike@getnextdesign.com',
        date: '10 oct, 10:23pm'
    },
    {
        title: 'AutoCad Drawings',
        email: 'Shared with: shakir@gmail.com',
        date: '10 oct, 10:23pm'
    },
    {
        title: 'Master Speardsheets',
        email: 'Shared with: john@google.com',
        date: '10 oct, 10:23pm'
    },
    {
        title: 'Design Comps',
        email: 'Shared with: kelvin@hunter.com',
        date: '10 oct, 10:23pm'
    },
    {
        title: 'Final Revisions',
        email: 'Shared with: saim@purepixel.com',
        date: '10 oct, 10:23pm'
    },
];


function getSearchInnerHtml() {

    let quickSearchItems = ``;

    quickSearchMeta.forEach(item => {
        quickSearchItems += `
            <div class="item flex justify-start items-center gap-3 w-100 rounded-md">
                <div class="img-container rounded-md flex-center">
                    <img src="/assets/images/icons/folder-share.svg" alt="marcus-family">
                </div>
                <div class="flex-1">
                    <div class="flex justify-between items-start">
                        <div class="flex flex-col justify-start items-start">
                            <p class="font-sm font-weight-500 color-purple-light">${item.title}</p>
                            <p class="font-xs font-weight-400 color-sky-light">${item.email}</p>
                        </div>
                        <p class="font-xs font-weight-400 color-sky-light">${item.date}</p>
                    </div>
                </div>
            </div>
            `
    })

    const element = `
    <div class="quick-search-elemnts">
        <h2 class="quick-search-header font-xl color-purple-light font-weight-600">Quick Search</h2>
        <div class="quick-search-elemnts-items flex flex-col justify-center items-start">
            ${quickSearchItems}
        </div>
    </div>`;


    return element;
}

export default function useMobileSearch() {


    function handleMobileSearchModalOpen() {
        // ADD MODAL HEADER
        const headerElement = `<input type="text" placeholder="Search" class="mobile-search-input w-100 font-md color-gray font-weight-500 rounded-lg">`;
        appendModalHeader(headerElement);

        // ADD MODAL BODY
        const bodyElement = getSearchInnerHtml();
        appendModalBodyContent(bodyElement);

        // OPEN MODAL
        handleModalOpen();


    }

    return {
        handleMobileSearchModalOpen
    }
}





