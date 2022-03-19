/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMenu = /* GraphQL */ `
  query GetMenu($id: ID!) {
    getMenu(id: $id) {
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
export const listMenus = /* GraphQL */ `
  query ListMenus(
    $filter: ModelMenuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getDish = /* GraphQL */ `
  query GetDish($id: ID!) {
    getDish(id: $id) {
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
export const listDishes = /* GraphQL */ `
  query ListDishes(
    $filter: ModelDishFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDishes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        menu {
          id
          name
          date
          type
          createdAt
          updatedAt
        }
        name
        createdAt
        updatedAt
        menuDishesId
      }
      nextToken
    }
  }
`;
