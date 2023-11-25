export interface Elements {
  id: number;
  text: string;
  href: string;
}

export interface Buttons {
  href: string;
  text: string;
  tipe: string;
}

export interface Clients {
  href: string;
  img: string;
  alt: string;
}

export interface FormElements {
  id: number;
  icon: string;
  text: string;
  href?: string | null;
}

export interface Planes {
  id: number;
  title: string;
  price: number;
  ul: Array<any>;
  textButton: string;
  elegido: boolean;
}

export interface Price {
  title?: string;
  descuento: number;
  meses: number;
}
