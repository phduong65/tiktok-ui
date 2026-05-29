import Header from '~/components/Layout/components/Header';

function HeaderOnlyLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <main>{children}</main>
            </div>
        </div>
    );
}

export default HeaderOnlyLayout;
