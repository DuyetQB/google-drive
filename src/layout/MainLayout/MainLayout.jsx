
import { Layout, Menu } from 'antd';
import SideBar from 'components/SideBar/SideBar';

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = ({ children }) => {

  return (
    <Layout className='h-[100vh]'>
     <SideBar />
      <Layout>
        <Header style={{ padding: 0, background: '#fff' }} />
        <Content style={{ margin: '24px 16px 0' }} className='bg-white rounded-2xl'>
          {children}
        </Content>
       
      </Layout>
    </Layout>
  );
};

export default MainLayout;