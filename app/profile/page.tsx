"use client"
import DriverPost from "@/components/posts/driver-post"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
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
              <div className="flex flex-col gap-4 mt-4">
                <Input value={context.user.displayName ? context.user.displayName : "none"} disabled />
                <Input value={context.user.email ? context.user.email : ""} disabled />
              </div>
            </SheetContent>
          </Sheet>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="font-bold">E`lon joylash</Button>
            </DialogTrigger>
            <DialogContent>
             <DialogHeader>
              <DialogTitle>
                E`lon joylash
              </DialogTitle>
             </DialogHeader>
             <DriverPost />
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
