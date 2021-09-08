import React from "react";
import { FlatList } from "react-native-gesture-handler";
import CS from './styles';

import { Button } from "../../components/Form/Button";

import {categories} from '../../utils/categories';

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory
}: Props){
  return(
    <CS.Container>
      <CS.Header>
        <CS.Title>Selecione uma categoria...</CS.Title>
      </CS.Header>

      <FlatList
        data={categories}
        style={{flex:1, width: '100%'}}
        keyExtractor={(item)=>item.key}
        renderItem={({item})=>(
          <CS.Category>
            <CS.Icon name={item.icon} />
            <CS.Name>{item.name}</CS.Name>
          </CS.Category>
        )}
        ItemSeparatorComponent={() => <CS.Separator />}
      />

      <CS.Footer>
        <Button
          title="Selecionar"
          onPress={closeSelectCategory}
        />
      </CS.Footer>
    </CS.Container>
  );
}