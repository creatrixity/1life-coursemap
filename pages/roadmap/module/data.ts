export type module = {
  lessons: any,
  nextModule: string|null,
  title: string
  id: number
}

export interface ModulesInterface {
  [key: string]: module,
}