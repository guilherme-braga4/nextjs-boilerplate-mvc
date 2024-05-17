import styles from './page.module.css'
import { Button } from '@/components/ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'

export default function Home() {
  return (
    <div className="bg-blue-500 h-screen w-screen flex items-center justify-center">
      <div className="bg-white p-16">Centralizada</div>
    </div>
  )
}
