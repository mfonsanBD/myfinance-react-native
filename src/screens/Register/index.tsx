import React, {useState} from "react";
import { Modal } from "react-native";

import { Button } from "../../components/Form/Button";
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";
import { Input } from "../../components/Form/Input";
import { TransactionType } from "../../components/Form/TransactionType";

import { CategorySelect } from "../CategorySelect";

import R from './styles';

export function Register(){
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Selecione uma categoria...'
  });
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const handleTransactionTypeSelect = (type: 'up' | 'down') => {
    setTransactionType(type);
  }

  const handleCloseSelectCategory = () => {
    setCategoryModalOpen(false);
  }

  const handleOpenSelectCategoryModal = () => {
    setCategoryModalOpen(true);
  }
  return(
    <R.Container>
      <R.Header>
        <R.Title>Cadastro de Transações</R.Title>
      </R.Header>

      <R.Form>
        <R.Fields>
          <Input 
            placeholder="Nome"
            placeholderTextColor="#969CB2"
          />
          <Input 
            placeholder="Preço"
            placeholderTextColor="#969CB2"
          />
          <R.Transaction>
            <TransactionType
              title="Entrada"
              type="up"
              onPress={() => handleTransactionTypeSelect('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionType
              title="Saída"
              type="down"
              onPress={() => handleTransactionTypeSelect('down')}
              isActive={transactionType === 'down'}
            />
          </R.Transaction>
          <CategorySelectButton 
            title="Selecione uma categoria..." 
            onPress={handleOpenSelectCategoryModal}
          />
        </R.Fields>
        <Button title="Enviar"/>
      </R.Form>

      <Modal 
        visible={categoryModalOpen}
        animationType="slide"
        onRequestClose={handleCloseSelectCategory}
      >
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategory}
        />
      </Modal>
    </R.Container>
  )
}