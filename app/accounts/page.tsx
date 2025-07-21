import SiteHeader from "@/components/site-header"
import NewsBar from "@/components/news-bar"
import AccountCard from "@/components/account-card"
import { pubgAccounts } from "@/lib/data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AccountsPage({ searchParams }: { searchParams: { type?: string } }) {
  const selectedTab = searchParams.type || "conqueror"

  const conquerorAccounts = pubgAccounts.filter((acc) => acc.type === "conqueror")
  const nonConquerorAccounts = pubgAccounts.filter((acc) => acc.type === "non-conqueror")
  const miscellaneousAccounts = pubgAccounts.filter((acc) => acc.type === "miscellaneous")

  return (
    <div className="min-h-screen bg-black text-gold">
      <SiteHeader />
      <NewsBar />
      <main className="container mx-auto py-8 px-4 md:px-6">
        <h1 className="text-4xl font-bold text-center mb-8 text-gold">حسابات ببجي موبايل</h1>

        <Tabs defaultValue={selectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-black-dark border border-gold-dark text-gold">
            <TabsTrigger
              value="conqueror"
              className="data-[state=active]:bg-gold data-[state=active]:text-black hover:bg-gold/20"
            >
              حسابات كونكر مميزة
            </TabsTrigger>
            <TabsTrigger
              value="non-conqueror"
              className="data-[state=active]:bg-gold data-[state=active]:text-black hover:bg-gold/20"
            >
              حسابات مميزة بدون كونكر
            </TabsTrigger>
            <TabsTrigger
              value="miscellaneous"
              className="data-[state=active]:bg-gold data-[state=active]:text-black hover:bg-gold/20"
            >
              حسابات متنوعة
            </TabsTrigger>
          </TabsList>

          <TabsContent value="conqueror" className="mt-6">
            <Card className="bg-black-dark border border-gold-dark text-gold">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gold">قسم حسابات مميزة كونكر</CardTitle>
              </CardHeader>
              <CardContent>
                {conquerorAccounts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {conquerorAccounts.map((account) => (
                      <AccountCard key={account.id} account={account} />
                    ))}
                  </div>
                ) : (
                  <p className="text-gold-light text-center py-8">لا توجد حسابات كونكر مميزة حالياً.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="non-conqueror" className="mt-6">
            <Card className="bg-black-dark border border-gold-dark text-gold">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gold">قسم حسابات مميزة بدون كونكر</CardTitle>
              </CardHeader>
              <CardContent>
                {nonConquerorAccounts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {nonConquerorAccounts.map((account) => (
                      <AccountCard key={account.id} account={account} />
                    ))}
                  </div>
                ) : (
                  <p className="text-gold-light text-center py-8">لا توجد حسابات مميزة بدون كونكر حالياً.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="miscellaneous" className="mt-6">
            <Card className="bg-black-dark border border-gold-dark text-gold">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gold">قسم حسابات متنوعة</CardTitle>
              </CardHeader>
              <CardContent>
                {miscellaneousAccounts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {miscellaneousAccounts.map((account) => (
                      <AccountCard key={account.id} account={account} />
                    ))}
                  </div>
                ) : (
                  <p className="text-gold-light text-center py-8">لا توجد حسابات متنوعة حالياً.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
