export interface Overview {
  content: string;
  source: string;
}
export interface Structure {
  content: string;
  source: string;
}

export interface Geology {
  content: string;
  source: string;
}

export interface Images {
  planet: string;
  internal: string;
  geology: string;
}

export interface Planet {
  name: string;
  overview: Overview;
  structure: Structure;
  geology: Geology;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: Images;
}
