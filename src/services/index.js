import { createServer } from 'miragejs'

export function makeServer() {
  createServer({
    routes() {
      this.namespace = 'api'

      this.get('/debts', () => ({
        debts: [
          { id: 1, name: 'Cinema', category: 'Paid', totalAmount: 50.0 },
          {
            id: 2,
            name: 'Restaurante',
            category: 'Unpaid',
            totalAmount: 120.0
          },
          {
            id: 3,
            name: 'Supermercado',
            category: 'Pending',
            totalAmount: 250.0
          },
          { id: 4, name: 'Gasolina', category: 'Paid', totalAmount: 200.0 },
          { id: 5, name: 'Aluguel', category: 'Unpaid', totalAmount: 1500.0 },
          { id: 6, name: 'Internet', category: 'Paid', totalAmount: 100.0 },
          {
            id: 7,
            name: 'Eletricidade',
            category: 'Unpaid',
            totalAmount: 300.0
          },
          { id: 8, name: 'Água', category: 'Pending', totalAmount: 80.0 },
          { id: 9, name: 'Telefone', category: 'Paid', totalAmount: 60.0 },
          { id: 10, name: 'Netflix', category: 'Unpaid', totalAmount: 30.0 },
          { id: 11, name: 'Spotify', category: 'Pending', totalAmount: 20.0 },
          {
            id: 12,
            name: 'Seguro Carro',
            category: 'Paid',
            totalAmount: 800.0
          },
          { id: 13, name: 'Academia', category: 'Unpaid', totalAmount: 90.0 },
          { id: 14, name: 'Farmácia', category: 'Pending', totalAmount: 45.0 },
          {
            id: 15,
            name: 'Mercado Livre',
            category: 'Paid',
            totalAmount: 150.0
          },
          { id: 16, name: 'Uber', category: 'Unpaid', totalAmount: 70.0 },
          { id: 17, name: 'Lazer', category: 'Pending', totalAmount: 100.0 },
          {
            id: 18,
            name: 'Consultas Médicas',
            category: 'Paid',
            totalAmount: 200.0
          },
          { id: 19, name: 'Livraria', category: 'Unpaid', totalAmount: 120.0 },
          { id: 20, name: 'Pet Shop', category: 'Pending', totalAmount: 60.0 },
          {
            id: 21,
            name: 'Salão de Beleza',
            category: 'Paid',
            totalAmount: 75.0
          },
          {
            id: 22,
            name: 'Manutenção Carro',
            category: 'Unpaid',
            totalAmount: 400.0
          },
          { id: 23, name: 'Roupas', category: 'Pending', totalAmount: 300.0 },
          { id: 24, name: 'Brinquedos', category: 'Paid', totalAmount: 50.0 },
          {
            id: 25,
            name: 'Curso Online',
            category: 'Unpaid',
            totalAmount: 200.0
          },
          {
            id: 26,
            name: 'Eletrônicos',
            category: 'Pending',
            totalAmount: 1000.0
          },
          { id: 27, name: 'Jantar', category: 'Paid', totalAmount: 180.0 },
          { id: 28, name: 'Viagem', category: 'Unpaid', totalAmount: 2500.0 },
          { id: 29, name: 'Hotel', category: 'Pending', totalAmount: 900.0 },
          { id: 30, name: 'Cinema', category: 'Paid', totalAmount: 50.0 }
        ]
      }))
    }
  })
}
