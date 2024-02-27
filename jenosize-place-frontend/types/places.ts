export interface PlacesInterFace {
  data: PlacesRoot
  isLoading: boolean
}

export interface PlacesRoot {
  html_attributions: any[]
  next_page_token: string
  results: Result[]
  status: string
}

export interface Result {
  business_status: string
  formatted_address: string
  geometry: Geometry
  icon: string
  icon_background_color: string
  icon_mask_base_uri: string
  name: string
  place_id: string
  plus_code?: PlusCode
  rating: number
  reference: string
  types: string[]
  user_ratings_total: number
  opening_hours?: OpeningHours
  photos?: Photo[]
}

export interface Geometry {
  location: Location
  viewport: Viewport
}

export interface Location {
  lat: number
  lng: number
}

export interface Viewport {
  northeast: Northeast
  southwest: Southwest
}

export interface Northeast {
  lat: number
  lng: number
}

export interface Southwest {
  lat: number
  lng: number
}

export interface PlusCode {
  compound_code: string
  global_code: string
}

export interface OpeningHours {
  open_now: boolean
}

export interface Photo {
  height: number
  html_attributions: string[]
  photo_reference: string
  width: number
}
