// 将sidenav 组件导入到本页布局中
import SideNav from '@/app/ui/dashboard/sidenav';

 
// 组件layout接收一个children属性，这个子组件可以是一个页面或者另一个布局
// 在这个例子中/dashboaed会被自动添加到layout.tsx的children中
// 注意要让该文件不会报错，我们需要先在dashboard中创建customers/page.tsx和invoices/page.tsx
// 因为这里引入的SideNav会导入 NavLinks，而NavLinks中默认我们已经有了以上两个文件
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}