/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMenu = /* GraphQL */ `
  mutation CreateMenu(
    $input: CreateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    createMenu(input: $input, condition: $condition) {
      id
      name
      date
      type
      dishes {
        items {
          id
          name
          createdAt
          updatedAt
          menuDishesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateMenu = /* GraphQL */ `
  mutation UpdateMenu(
    $input: UpdateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    updateMenu(input: $input, condition: $condition) {
      id
      name
      date
      type
      dishes {
        items {
          id
          name
          createdAt
          updatedAt
          menuDishesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteMenu = /* GraphQL */ `
  mutation DeleteMenu(
    $input: DeleteMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    deleteMenu(input: $input, condition: $condition) {
      id
      name
      date
      type
      dishes {
        items {
          id
          name
          createdAt
          updatedAt
          menuDishesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createDish = /* GraphQL */ `
  mutation CreateDish(
    $input: CreateDishInput!
    $condition: ModelDishConditionInput
  ) {
    createDish(input: $input, condition: $condition) {
      id
      menu {
        id
        name
        date
        type
        dishes {
          nextToken
        }
        createdAt
        updatedAt
      }
      name
      createdAt
      updatedAt
      menuDishesId
    }
  }
`;
export const updateDish = /* GraphQL */ `
  mutation UpdateDish(
    $input: UpdateDishInput!
    $condition: ModelDishConditionInput
  ) {
    updateDish(input: $input, condition: $condition) {
      id
      menu {
        id
        name
        date
        type
        dishes {
          nextToken
        }
        createdAt
        updatedAt
      }
      name
      createdAt
      updatedAt
      menuDishesId
    }
  }
`;
export const deleteDish = /* GraphQL */ `
  mutation DeleteDish(
    $input: DeleteDishInput!
    $condition: ModelDishConditionInput
  ) {
    deleteDish(input: $input, condition: $condition) {
      id
      menu {
        id
        name
        date
        type
        dishes {
          nextToken
        }
        createdAt
        updatedAt
      }
      name
      createdAt
      updatedAt
      menuDishesId
    }
  }
`;
