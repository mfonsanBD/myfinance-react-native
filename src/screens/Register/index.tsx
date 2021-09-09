import React, { useState } from "react";
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from "react-native";

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

import { Button } from "../../components/Form/Button";
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";
import { InputForm } from "../../components/Form/InputForm";
import { TransactionType } from "../../components/Form/TransactionType";

import { CategorySelect } from "../CategorySelect";

import R from './styles';

interface FormData {
  name: string;
  amount: string;
}

const schema = Yup.object().shape({
  name: Yup
  .string()
  .required('O nome da transação é obrigatório'),

  amount: Yup
  .number()
  .typeError('O campo valor só aceita número')
  .positive('O campo valor não aceita número negativo')
  .required('O valor da transação é obrigatório'),
});

export function Register(){
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Selecione uma categoria...'
  });

  const {control, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
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

  const handleRegister = (form: FormData) => {
    if(!transactionType)
      return Alert.alert('Selecione o tipo de transação');

    if(category.key === 'category')
      return Alert.alert('Selecione a categoria');

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }
    console.log(data);
  }
  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <R.Container>
        <R.Header>
          <R.Title>Cadastro de Transações</R.Title>
        </R.Header>

        <R.Form>
          <R.Fields>
            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
              placeholderTextColor="#969CB2"
              autoCapitalize="words"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputForm 
              name="amount"
              control={control}
              placeholder="Preço"
              placeholderTextColor="#969CB2"
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
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
              title={category.name}
              onPress={handleOpenSelectCategoryModal}
            />
          </R.Fields>
          <Button title="Enviar" onPress={handleSubmit(handleRegister)}/>
        </R.Form>

        <Modal 
          visible={categoryModalOpen}
          animationType="slide"
          onRequestClose={handleCloseSelectCategory}
          statusBarTranslucent={true}
        >
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseSelectCategory}
          />
        </Modal>
      </R.Container>
    </TouchableWithoutFeedback>
  )
}