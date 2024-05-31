"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { AuthContext } from "@/context/auth-context"
import { Menu } from "lucide-react"
import { useRouter } from "next/navigation"
import { useContext } from "react"

export default function Profile() {
    const context = useContext(AuthContext)
    const navigation = useRouter()

    if(!context?.user) {
      navigation.push('/')
      return
    }

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <p className="font-bold text-4xl">Elonlaringiz</p>
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={'ghost'}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Profilingiz</SheetTitle>
                <SheetDescription>
                  Lorem ipsum dolor sit amet consectetur.
                </SheetDescription>
              </SheetHeader>
              <div>

              </div>
            </SheetContent>
          </Sheet>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="font-bold">E`lon joylash</Button>
            </DialogTrigger>
            <DialogContent>
              
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div>
        {

        }
      </div>
    </div>
  )
}
