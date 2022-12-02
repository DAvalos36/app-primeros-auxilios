export interface Problema {
  id: string
  nombre: string
  contenido: string
  logoDir: string
}

export interface Caso {
  titulo: string
  introduccion: string
  pasos: string[]
  peligro: boolean
  linkImagen: string
  numeroEmergencia?: string
}
export interface Caso2 {
  titulo: string
  contenido: string
  peligro: boolean
  linkImagen: string
  numeroEmergencia?: string
}

export interface Interes {
  id: number
  titulo: string
  contenido: string
  link_img: string
  created_at: string
}

export interface RespuestaSalud {
  status: string
  totalResults: number
  articles: Articulos[]
}

export interface Articulos {
  source: Source
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

interface Source {
  id?: string
  name: string
}
