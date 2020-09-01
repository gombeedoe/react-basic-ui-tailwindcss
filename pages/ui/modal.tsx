import { useState } from "react";

import Button from "@/components/button";
import Modal from "@/components/modal";

export default function ModalPage() {
  const [isOpen, toggleOpen] = useState(false);

  console.log(isOpen);

  return (
    <>
      <Button type="button" onClick={() => toggleOpen(true)}>
        モーダルを開く
      </Button>
      <Modal open={isOpen}>
        <div className="p-8 bg-white rounded">
          <Button type="button" onClick={() => toggleOpen(false)}>
            モーダルを閉じる
          </Button>
        </div>
      </Modal>
    </>
  );
}
