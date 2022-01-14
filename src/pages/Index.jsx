import Layout from '../components/Layout/Layout';
import Style from '../assets/css/top.module.css';

const Index = () => {
    return (
        <Layout>
            <main className={Style.top}>
                <h2>REACT APP</h2>
                <p>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</p>
            </main>
        </Layout>
    );
}

export default Index;
