export const useModal = () => {
    const showModal = useState('showModal', () => false)

    const openModal = () => {
        showModal.value = true
    }

    const closeModal = () => {
        showModal.value = false
    }

    return {
        showModal,
        openModal,
        closeModal
    }
}
