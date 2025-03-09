import type { DocumentNode } from '@apollo/client'
import { gql } from '@apollo/client'

export const GET_STORE_CONFIG: DocumentNode = gql`
  query getStoreConfig {
    storeConfig {
      code: store_code
      cms_page: cms_home_page
      locale
      logo_alt
      logo_src: header_logo_src
      shortcut_icon: head_shortcut_icon
      base_media: secure_base_media_url
    }
    currency {
      code: base_currency_code
      symbol: base_currency_symbol
    }
  }
`
