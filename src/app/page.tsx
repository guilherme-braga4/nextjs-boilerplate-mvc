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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'

export default function Home() {
  return (
    <div className="grid grid-cols-[10%_90%] h-screen w-screen">
      {/* SideBar */}
      <div className="bg-gray-100 flex flex-col">SideBar</div>
      <div className="max-w-full h-full px-4 grid grid-rows-[10%_90%] overflow-hidden">
        <div className="flex p-8 items-center">
          <div className="shadow-lg rounded-xl w-full grid grid-cols-3 gap-6">
            <div className="p-[8px] flex flex-col">
              <label>Pesquise seus débitos</label>
            </div>
            <div className="p-[8px] flex flex-col">
              <label>Filtre seus débitos por datas</label>
              {/* Date Picker */}
            </div>
            <div className="p-[8px] flex flex-col">
              <label>Outro filtro</label>
              {/*  */}
            </div>
          </div>
        </div>
        <div className="w-full gap-8 flex flex-col">
          <div className="w-auto h-auto m-[16px] flex justify-end items-center mx-8 gap-4">
            <Button size="table">Adicionar Débito</Button>
            <Button size="table">Ação XPTO</Button>
          </div>
          <div className="grid grid-rows-[90%_10%] pb-8 overflow-hidden">
            <div className="flex flex-col gap-6 overflow-auto">
              <Table>
                <TableCaption>Uma lista com todos os seus débitos</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Nome</TableHead>
                    <TableHead className="w-[200px]">Categoria</TableHead>
                    <TableHead className="w-[100px]">Ações</TableHead>
                    <TableHead className="w-[100px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { nome: 'INV001', categoria: 'Paid' },
                    { nome: 'INV002', categoria: 'Unpaid' },
                    { nome: 'INV003', categoria: 'Pending' },
                    { nome: 'INV004', categoria: 'Paid' },
                    { nome: 'INV005', categoria: 'Unpaid' },
                    { nome: 'INV001', categoria: 'Paid' },
                    { nome: 'INV002', categoria: 'Unpaid' },
                    { nome: 'INV003', categoria: 'Pending' },
                    { nome: 'INV004', categoria: 'Paid' },
                    { nome: 'INV005', categoria: 'Unpaid' },
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
              <div className="flex justify-end items-center mx-8">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
