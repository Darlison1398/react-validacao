function Header () {
    const style = {
        backgroundColor: 'rgb(19, 130, 150)',
        color: '#ffffff',
    }
    return (
        <div style={style}>
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-4 text-center">Darlison Silva</h1>
                    <p className="lead text-center">
                        Desenvolvedor Full Stack
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header;