'use client'

import Modal from "./Modal";
import useRentModal from "@/app/hooks/useRentModal";

const RentModal = () => {
    const rentModal = useRentModal()

    return (
        <Modal
            isOpen={rentModal.isOpen}
            titele="Booking your home"
            onClose={rentModal.onClose}
            onSubmit={rentModal.onClose}
            actionLable="Submit"
        />
    )
}

export default RentModal