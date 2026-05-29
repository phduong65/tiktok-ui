import Header from './Header';

function HeaderOnlyLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container" style={{ display: 'flex' }}>
                <main>{children}</main>
            </div>
        </div>
    );
}

export default HeaderOnlyLayout;
