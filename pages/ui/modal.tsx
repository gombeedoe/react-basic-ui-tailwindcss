import { useState } from "react";

import Button from "@/components/button";
import Modal from "@/components/modal/modal";
import useModal from "@/components/modal/useModal";

export default function ModalPage() {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Button type="button" onClick={toggle}>
        モーダルを開く
      </Button>
      <Modal isShowing={isShowing} hide={toggle} label="modal_label">
        <div className="p-8 bg-white rounded">
          <Button type="button" onClick={toggle}>
            モーダルを閉じる
          </Button>
        </div>
      </Modal>
    </>
  );
}
