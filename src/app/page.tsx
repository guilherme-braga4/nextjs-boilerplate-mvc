import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

export default function Home() {
  return (
    <div className="bg-[#F0F0F0] h-screen w-screen flex items-center justify-center">
      <Table>
        <TableCaption>Uma lista com todos os seus débitos</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Nome</TableHead>
            <TableHead className="w-[200px]">Categoria</TableHead>
            <TableHead className="w-[100px]">Ações</TableHead>
            <TableHead className="w-[100px]"></TableHead>
            <TableHead className="w-[100px]">
              <Button size="table">Adicionar Débito</Button>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            { nome: 'INV001', categoria: 'Paid' },
            { nome: 'INV002', categoria: 'Unpaid' },
            { nome: 'INV003', categoria: 'Pending' },
            { nome: 'INV004', categoria: 'Paid' },
            { nome: 'INV005', categoria: 'Unpaid' }
          ].map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.nome}</TableCell>
              <TableCell>{item.categoria}</TableCell>
              <TableCell className="w-[100px] text-center">
                <Button size="table">Quitar</Button>
              </TableCell>
              <TableCell className="w-[100px] text-center">
                <Button size="table">Detalhes</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
