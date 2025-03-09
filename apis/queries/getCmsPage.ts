import type { DocumentNode } from '@apollo/client'
import { gql } from '@apollo/client'

export const GET_CMS_PAGE: DocumentNode = gql`
  query getCmsPage($identifier: String) {
    cmsPage(identifier: $identifier) {
      content
      identifier
      meta_description
      meta_keywords
      meta_title
      title
    }
  }
`
