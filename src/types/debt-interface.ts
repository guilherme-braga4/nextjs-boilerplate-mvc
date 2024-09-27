enum DebtCategoryEnum {
  paid = 'paid',
  unpaid = 'unpaid',
  pending = 'pending'
}

interface DebtInterface {
  name: string
  category: DebtCategoryEnum
  totalAmount: number
}
