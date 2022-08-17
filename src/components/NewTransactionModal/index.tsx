import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";

function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <Dialog.Title> Nova Transação </Dialog.Title>

        <form>
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" min="1" required />
          <input type="text" placeholder="Categoria" required />

          <TransactionType>
            <TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} /> Entrada
            </TransactionTypeButton>
            <TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} /> Saída
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit"> Cadastrar </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}

export { NewTransactionModal };