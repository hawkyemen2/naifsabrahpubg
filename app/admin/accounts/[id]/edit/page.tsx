"use client"

import { useParams } from "next/navigation"
import AccountForm from "@/components/admin/account-form"
import { pubgAccounts } from "@/lib/data" // Using mock data

export default function EditAccountPage() {
  const params = useParams()
  const accountId = params.id as string
  const account = pubgAccounts.find((acc) => acc.id === accountId)

  if (!account) {
    return (
      <div className="text-center text-gold-light py-10">
        <h1 className="text-3xl font-bold text-gold mb-4">الحساب غير موجود</h1>
        <p>عذراً، لم يتم العثور على الحساب الذي تبحث عنه.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gold">تعديل حساب ببجي</h1>
      <AccountForm initialData={account} />
    </div>
  )
}
