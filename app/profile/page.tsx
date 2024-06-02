"use client"
import DriverPost from "@/app/components/posts/driver-post"
import { Button } from "@/app/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/app/components/ui/dialog"
import { Input } from "@/app/components/ui/input"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/app/components/ui/sheet"
import { UserContext } from "@/context/user-context"
import { Menu } from "lucide-react"
import { useRouter } from "next/navigation"
import { useContext, useEffect, useMemo } from "react"

export default function Profile() {
    const user = useContext(UserContext) // { last_name: "tilav", first_name: "shawki", ... }
    const navigation = useRouter()

    useEffect(() => {
      if(!user) {
        navigation.push('/')
      }
    }, [user, navigation])

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
                <Input disabled />
                <Input disabled />
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
