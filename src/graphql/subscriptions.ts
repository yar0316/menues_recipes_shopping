/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMenu = /* GraphQL */ `
  subscription OnCreateMenu {
    onCreateMenu {
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
export const onUpdateMenu = /* GraphQL */ `
  subscription OnUpdateMenu {
    onUpdateMenu {
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
export const onDeleteMenu = /* GraphQL */ `
  subscription OnDeleteMenu {
    onDeleteMenu {
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
export const onCreateDish = /* GraphQL */ `
  subscription OnCreateDish {
    onCreateDish {
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
export const onUpdateDish = /* GraphQL */ `
  subscription OnUpdateDish {
    onUpdateDish {
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
export const onDeleteDish = /* GraphQL */ `
  subscription OnDeleteDish {
    onDeleteDish {
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
