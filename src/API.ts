/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMenuInput = {
  id?: string | null,
  name: string,
  date: string,
  type?: number | null,
};

export type ModelMenuConditionInput = {
  name?: ModelStringInput | null,
  date?: ModelStringInput | null,
  type?: ModelIntInput | null,
  and?: Array< ModelMenuConditionInput | null > | null,
  or?: Array< ModelMenuConditionInput | null > | null,
  not?: ModelMenuConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Menu = {
  __typename: "Menu",
  id: string,
  name: string,
  date: string,
  type?: number | null,
  dishes?: ModelDishConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelDishConnection = {
  __typename: "ModelDishConnection",
  items:  Array<Dish | null >,
  nextToken?: string | null,
};

export type Dish = {
  __typename: "Dish",
  id: string,
  menu?: Menu | null,
  name: string,
  createdAt: string,
  updatedAt: string,
  menuDishesId?: string | null,
};

export type UpdateMenuInput = {
  id: string,
  name?: string | null,
  date?: string | null,
  type?: number | null,
};

export type DeleteMenuInput = {
  id: string,
};

export type CreateDishInput = {
  id?: string | null,
  name: string,
  menuDishesId?: string | null,
};

export type ModelDishConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelDishConditionInput | null > | null,
  or?: Array< ModelDishConditionInput | null > | null,
  not?: ModelDishConditionInput | null,
  menuDishesId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateDishInput = {
  id: string,
  name?: string | null,
  menuDishesId?: string | null,
};

export type DeleteDishInput = {
  id: string,
};

export type ModelMenuFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  date?: ModelStringInput | null,
  type?: ModelIntInput | null,
  and?: Array< ModelMenuFilterInput | null > | null,
  or?: Array< ModelMenuFilterInput | null > | null,
  not?: ModelMenuFilterInput | null,
};

export type ModelMenuConnection = {
  __typename: "ModelMenuConnection",
  items:  Array<Menu | null >,
  nextToken?: string | null,
};

export type ModelDishFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelDishFilterInput | null > | null,
  or?: Array< ModelDishFilterInput | null > | null,
  not?: ModelDishFilterInput | null,
  menuDishesId?: ModelIDInput | null,
};

export type CreateMenuMutationVariables = {
  input: CreateMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type CreateMenuMutation = {
  createMenu?:  {
    __typename: "Menu",
    id: string,
    name: string,
    date: string,
    type?: number | null,
    dishes?:  {
      __typename: "ModelDishConnection",
      items:  Array< {
        __typename: "Dish",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        menuDishesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMenuMutationVariables = {
  input: UpdateMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type UpdateMenuMutation = {
  updateMenu?:  {
    __typename: "Menu",
    id: string,
    name: string,
    date: string,
    type?: number | null,
    dishes?:  {
      __typename: "ModelDishConnection",
      items:  Array< {
        __typename: "Dish",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        menuDishesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMenuMutationVariables = {
  input: DeleteMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type DeleteMenuMutation = {
  deleteMenu?:  {
    __typename: "Menu",
    id: string,
    name: string,
    date: string,
    type?: number | null,
    dishes?:  {
      __typename: "ModelDishConnection",
      items:  Array< {
        __typename: "Dish",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        menuDishesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDishMutationVariables = {
  input: CreateDishInput,
  condition?: ModelDishConditionInput | null,
};

export type CreateDishMutation = {
  createDish?:  {
    __typename: "Dish",
    id: string,
    menu?:  {
      __typename: "Menu",
      id: string,
      name: string,
      date: string,
      type?: number | null,
      dishes?:  {
        __typename: "ModelDishConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    createdAt: string,
    updatedAt: string,
    menuDishesId?: string | null,
  } | null,
};

export type UpdateDishMutationVariables = {
  input: UpdateDishInput,
  condition?: ModelDishConditionInput | null,
};

export type UpdateDishMutation = {
  updateDish?:  {
    __typename: "Dish",
    id: string,
    menu?:  {
      __typename: "Menu",
      id: string,
      name: string,
      date: string,
      type?: number | null,
      dishes?:  {
        __typename: "ModelDishConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    createdAt: string,
    updatedAt: string,
    menuDishesId?: string | null,
  } | null,
};

export type DeleteDishMutationVariables = {
  input: DeleteDishInput,
  condition?: ModelDishConditionInput | null,
};

export type DeleteDishMutation = {
  deleteDish?:  {
    __typename: "Dish",
    id: string,
    menu?:  {
      __typename: "Menu",
      id: string,
      name: string,
      date: string,
      type?: number | null,
      dishes?:  {
        __typename: "ModelDishConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    createdAt: string,
    updatedAt: string,
    menuDishesId?: string | null,
  } | null,
};

export type GetMenuQueryVariables = {
  id: string,
};

export type GetMenuQuery = {
  getMenu?:  {
    __typename: "Menu",
    id: string,
    name: string,
    date: string,
    type?: number | null,
    dishes?:  {
      __typename: "ModelDishConnection",
      items:  Array< {
        __typename: "Dish",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        menuDishesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMenusQueryVariables = {
  filter?: ModelMenuFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMenusQuery = {
  listMenus?:  {
    __typename: "ModelMenuConnection",
    items:  Array< {
      __typename: "Menu",
      id: string,
      name: string,
      date: string,
      type?: number | null,
      dishes?:  {
        __typename: "ModelDishConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDishQueryVariables = {
  id: string,
};

export type GetDishQuery = {
  getDish?:  {
    __typename: "Dish",
    id: string,
    menu?:  {
      __typename: "Menu",
      id: string,
      name: string,
      date: string,
      type?: number | null,
      dishes?:  {
        __typename: "ModelDishConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    createdAt: string,
    updatedAt: string,
    menuDishesId?: string | null,
  } | null,
};

export type ListDishesQueryVariables = {
  filter?: ModelDishFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDishesQuery = {
  listDishes?:  {
    __typename: "ModelDishConnection",
    items:  Array< {
      __typename: "Dish",
      id: string,
      menu?:  {
        __typename: "Menu",
        id: string,
        name: string,
        date: string,
        type?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      name: string,
      createdAt: string,
      updatedAt: string,
      menuDishesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMenuSubscription = {
  onCreateMenu?:  {
    __typename: "Menu",
    id: string,
    name: string,
    date: string,
    type?: number | null,
    dishes?:  {
      __typename: "ModelDishConnection",
      items:  Array< {
        __typename: "Dish",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        menuDishesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMenuSubscription = {
  onUpdateMenu?:  {
    __typename: "Menu",
    id: string,
    name: string,
    date: string,
    type?: number | null,
    dishes?:  {
      __typename: "ModelDishConnection",
      items:  Array< {
        __typename: "Dish",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        menuDishesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMenuSubscription = {
  onDeleteMenu?:  {
    __typename: "Menu",
    id: string,
    name: string,
    date: string,
    type?: number | null,
    dishes?:  {
      __typename: "ModelDishConnection",
      items:  Array< {
        __typename: "Dish",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        menuDishesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDishSubscription = {
  onCreateDish?:  {
    __typename: "Dish",
    id: string,
    menu?:  {
      __typename: "Menu",
      id: string,
      name: string,
      date: string,
      type?: number | null,
      dishes?:  {
        __typename: "ModelDishConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    createdAt: string,
    updatedAt: string,
    menuDishesId?: string | null,
  } | null,
};

export type OnUpdateDishSubscription = {
  onUpdateDish?:  {
    __typename: "Dish",
    id: string,
    menu?:  {
      __typename: "Menu",
      id: string,
      name: string,
      date: string,
      type?: number | null,
      dishes?:  {
        __typename: "ModelDishConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    createdAt: string,
    updatedAt: string,
    menuDishesId?: string | null,
  } | null,
};

export type OnDeleteDishSubscription = {
  onDeleteDish?:  {
    __typename: "Dish",
    id: string,
    menu?:  {
      __typename: "Menu",
      id: string,
      name: string,
      date: string,
      type?: number | null,
      dishes?:  {
        __typename: "ModelDishConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    createdAt: string,
    updatedAt: string,
    menuDishesId?: string | null,
  } | null,
};
