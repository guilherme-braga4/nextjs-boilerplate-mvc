'use client'
import { createServer } from 'miragejs'

import * as React from 'react'
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
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { format, addDays } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { cn } from '@/lib/utils'
import { Calendar } from '@/components/ui/calendar'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { toast } from '@/components/ui/use-toast'
import { DateRange } from 'react-day-picker'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
// import { makeServer } from '../../services'

export default function Home() {
  const [debts, setDebts] = React.useState([
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
    }
  ])

  {
    /* Calendar Picker */
  }
  const FormSchema = z.object({
    dob: z.date({
      required_error: 'A date of birth is required.'
    })
  })
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      )
    })
  }

  {
    /* Date Range Picker */
  }
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20)
  })

  return (
    <div className="max-w-full h-full px-4 grid grid-rows-[10%_90%] overflow-hidden">
      <div className="flex p-8 items-center">
        <div className="shadow-lg rounded-xl w-full grid grid-cols-3 gap-6">
          <div className="p-[8px] flex flex-col">
            <Label className="p-3">Pesquise seus débitos</Label>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input
                className="w-full"
                type="text"
                placeholder="Ex: contas da casa"
              />
              <Button size="sm" type="submit" className="w-0">
                Buscar
              </Button>
            </div>
          </div>
          <div className="p-[8px] flex flex-col">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 flex flex-row gap-[16px]"
              >
                <FormField
                  control={form.control}
                  name="dob"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <Label className="p-3">Filtre seus débitos por dia</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={'outline'}
                              className={cn(
                                'w-[240px] pl-3 !m-[0px] text-left font-normal',
                                !field.value && 'text-muted-foreground'
                              )}
                            >
                              {field.value ? (
                                format(field.value, 'PPP')
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={date =>
                              date > new Date() || date < new Date('1900-01-01')
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-end">
                  <Button size="default" type="submit">
                    Submit
                  </Button>
                </div>
              </form>
            </Form>
          </div>
          <div className="p-[8px] flex flex-col">
            <Label className="p-3">Filtre seus débitos por período</Label>
            <div className={cn('grid gap-2')}>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant={'outline'}
                    className={cn(
                      'w-[300px] justify-start text-left font-normal',
                      !date && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date?.from ? (
                      date.to ? (
                        <>
                          {format(date.from, 'LLL dd, y')} -{' '}
                          {format(date.to, 'LLL dd, y')}
                        </>
                      ) : (
                        format(date.from, 'LLL dd, y')
                      )
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
            </div>
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
                  <TableHead className="w-[200px]">Preço Total</TableHead>
                  <TableHead className="w-[100px]">Ações</TableHead>
                  <TableHead className="w-[100px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {debts.map((item: DebtInterface, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>R$ {item.totalAmount}</TableCell>
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
  )
}
