"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusCircle, Edit, Trash2 } from "lucide-react"
import { pubgAccounts as initialPubgAccounts } from "@/lib/data" // Import initial data

export default function AdminAccountsPage() {
  const [accounts, setAccounts] = useState(initialPubgAccounts)

  const handleDelete = (id: string) => {
    if (window.confirm("هل أنت متأكد أنك تريد حذف هذا الحساب؟")) {
      // In a real application, you would make an API call here to delete the account
      // For now, we'll just filter it out from the local state
      setAccounts(accounts.filter((account) => account.id !== id))
      alert("تم حذف الحساب بنجاح (محاكاة).")
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gold">إدارة حسابات ببجي</h1>
        <Button asChild className="bg-gold text-black hover:bg-gold-light">
          <Link href="/admin/accounts/new">
            <PlusCircle className="h-4 w-4 ml-2" />
            إضافة حساب جديد
          </Link>
        </Button>
      </div>

      <Card className="bg-black-dark border border-gold-dark text-gold shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl">قائمة الحسابات</CardTitle>
          <CardDescription className="text-gold-light">عرض وإدارة جميع حسابات ببجي.</CardDescription>
        </CardHeader>
        <CardContent>
          {accounts.length === 0 ? (
            <p className="text-center text-gold-light py-8">لا توجد حسابات لعرضها. ابدأ بإضافة حساب جديد!</p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-black-light border-gold-dark">
                    <TableHead className="text-gold">الاسم</TableHead>
                    <TableHead className="text-gold">السعر</TableHead>
                    <TableHead className="text-gold">النوع</TableHead>
                    <TableHead className="text-gold text-center">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {accounts.map((account) => (
                    <TableRow key={account.id} className="border-gold-dark hover:bg-black-light/50">
                      <TableCell className="font-medium text-gold">{account.name}</TableCell>
                      <TableCell className="text-gold-light">{account.price}</TableCell>
                      <TableCell className="text-gold-light">
                        {account.type === "conqueror"
                          ? "كونكر"
                          : account.type === "non-conqueror"
                            ? "بدون كونكر"
                            : "متنوع"}
                      </TableCell>
                      <TableCell className="flex justify-center gap-2">
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="border-gold text-gold hover:bg-gold hover:text-black bg-transparent"
                        >
                          <Link href={`/admin/accounts/${account.id}/edit`}>
                            <Edit className="h-4 w-4" />
                            <span className="sr-only">تعديل</span>
                          </Link>
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDelete(account.id)}
                          className="bg-red-600 text-white hover:bg-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">حذف</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
