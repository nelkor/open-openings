type SAN = string // Standard Algebraic Notation

interface MoveBase {
  san: SAN
  comment: string[]
}

// Имя вариации указывается в её финальном ходе.
interface FinalMove extends MoveBase {
  name: string
}

// На каждый ход, кроме финального, есть один или более ответов противника.
interface PassingMove extends MoveBase {
  replies: Record<SAN, Move>
}

type Move = FinalMove | PassingMove

// Если это дебют за белых — firstMove будет null.
// Если за чёрных — в firstMove указан первый ход оппонента.
export interface Opening {
  name: string
  tree: PassingMove
  description: string[]
  firstMove: null | SAN
}

// Ходы от начала дерева до первой развилки считаются "Начальной линией" дебюта.
