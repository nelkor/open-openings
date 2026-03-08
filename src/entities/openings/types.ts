type SAN = string // Standard Algebraic Notation

export interface MoveBase {
  san: SAN
  comment: string[]
}

// Имя вариации указывается в её финальном ходе.
export interface FinalMove extends MoveBase {
  name: string
}

// На каждый ход, кроме финального, есть один или более ответов противника.
export interface PassingMove extends MoveBase {
  replies: Record<SAN, Move>
}

export type Move = FinalMove | PassingMove

// Дебют с древовидной структурой всех вариаций.
// Если это дебют за белых — firstMove будет null.
// Если за чёрных — в firstMove указан первый ход оппонента.
// Ходы от начала дерева до первой развилки считаются "Начальной линией" дебюта.
export interface Opening {
  name: string
  tree: PassingMove
  description: string[]
  firstMove: null | SAN
}

// "Плоская" линия дебюта, вычисленная из дерева.
// Именно по ней играет пользователь.
export interface OpeningVariation {
  name: string
  moves: MoveBase[]
  openingName: string
  firstMove: null | SAN
}
