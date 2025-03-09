import type { DocumentNode } from '@apollo/client'
import { gql } from '@apollo/client'

export const GET_NAV_MENUS: DocumentNode = gql`
  query getNavMenus {
    navMenus: categoryList {
      id
      children {
        id
        name
        level
        url_path
        include_in_menu
        position
        children {
          id
          name
          level
          url_path
          include_in_menu
          position
          children {
            id
            name
            level
            url_path
            include_in_menu
            position
          }
        }
      }
    }
  }
`
