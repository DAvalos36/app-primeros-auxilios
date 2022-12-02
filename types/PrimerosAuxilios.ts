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
