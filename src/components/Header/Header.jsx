import Style from '../../assets/css/header.module.css';

export const Header = () => {
    return (
        <header>
            <h1>header</h1>
            <p className={Style.text}>
                この文章はダミーです。
            </p>
        </header>
    );
}